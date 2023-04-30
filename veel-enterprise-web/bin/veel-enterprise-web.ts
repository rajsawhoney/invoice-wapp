#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { VeelEnterpriseWebStack } from "../lib/veel-enterprise-web-stack";

const app = new cdk.App();

const environments = {
  Development: {
    env: { account: "<aws-account-id>", region: "us-east-1" },
    branchName: "dev",
    domainName: "veelapp.com",
    domainPrefix: "dev",
    authDomain: "dev.api.veelapp.com",
    apiUrl: "https://dev.api.veelapp.com",
    authAudience: "https://dev.api.veelapp.com",
  },
};

// For each environment, create a stack
for (const [name, env] of Object.entries(environments)) {
  new VeelEnterpriseWebStack(app, `VeelEnterpriseWebStack-${name}`, {
    ...env,
    envName: name,
  });
}
