import * as cdk from "aws-cdk-lib"

export default interface VeelEnterpriseWebStackProps extends cdk.StackProps {
    readonly authAudience: string
    readonly apiUrl: string
    readonly authDomain: string
    readonly envName: string
    readonly branchName: string
    readonly domainPrefix: string
    readonly domainName: string
}
