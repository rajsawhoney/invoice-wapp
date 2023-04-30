import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as amplify from "@aws-cdk/aws-amplify-alpha";
import { aws_iam as AWS_IAM, SecretValue } from "aws-cdk-lib";
import { RedirectStatus } from "@aws-cdk/aws-amplify-alpha/lib/app";
import VeelEnterpriseWebStackProps from "./VeelEnterpriseWebStackProps";

export class VeelEnterpriseWebStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    props: VeelEnterpriseWebStackProps
  ) {
    super(scope, id, props);
    this.initAsync(props);
  }
  async initAsync(props: VeelEnterpriseWebStackProps) {
    const amplifyRole = new AWS_IAM.Role(this, "AmplifyRole", {
      assumedBy: new AWS_IAM.ServicePrincipal("amplify.amazonaws.com"),
    });
    amplifyRole.addManagedPolicy(
      AWS_IAM.ManagedPolicy.fromAwsManagedPolicyName(
        "AdministratorAccess-Amplify"
      )
    );

    const amplifyApp = new amplify.App(this, "AmplifyApp", {
      appName: `veel-enterprise-web-${props.envName}`,
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: "rajsawhoney",
        repository: "invoice-wapp",
        oauthToken: SecretValue.secretsManager(
          `amplify-${props.envName}-github-token`
        ),
      }),
      role: amplifyRole,
      environmentVariables: {
        AUTH_DOMAIN: props.authDomain,
        API_URL: props.apiUrl,
        AUTH_AUDIENCE: props.authAudience,
      },
    });

    const branch = amplifyApp.addBranch("AmplifyBranch", {
      autoBuild: true,
      branchName: props.branchName,
      performanceMode: false,
    });

    amplifyApp.addDomain(`amplify-${props.envName}-domain`, {
      domainName: props.domainName,
      enableAutoSubdomain: false,
      subDomains: [
        {
          branch: branch,
          prefix: props.domainPrefix,
        },
      ],
    });

    amplifyApp.addCustomRule({
      source: "/luna/v1.0/<*>",
      target: `${props.apiUrl}/luna/v1.0/<*>`,
      status: RedirectStatus.REWRITE,
    });

    amplifyApp.addCustomRule({
      source: "/<*>",
      target: "/index.html",
      status: RedirectStatus.NOT_FOUND,
    });
  }
}
