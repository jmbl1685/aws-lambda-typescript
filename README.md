# aws-lambda-typescript

AWS lambda wiht Typescript + Serverless Framework

  - To run local
  
```
npm run dev
```
 - Console successful results:
 
 ```sh
 > aws-lambda-typescript@1.0.0 dev
> nodemon --config nodemon.json

[nodemon] 2.0.19
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src\**\*
[nodemon] watching extensions: ts
[nodemon] starting `serverless offline start`
Compiling with Typescript...
Typescript compiled.
Watching typescript files...

Starting Offline at stage dev (us-east-1)

Offline [http for lambda] listening on http://localhost:3002
Function names exposed for local invocation by aws-sdk:
           * sample: aws-lambda-typescript-dev-sample

   ┌──────────────────────────────────────────────────────────────────────────┐
   │                                                                          │
   │   GET | http://localhost:3000/                                           │
   │   POST | http://localhost:3000/2015-03-31/functions/sample/invocations   │
   │                                                                          │
   └──────────────────────────────────────────────────────────────────────────┘

Server ready: http://localhost:3000 🚀

Enter "rp" to replay the last request

 ```

 - To deploy:

```
npm run deploy
```

 - Console successful results:

```sh
> aws-lambda-typescript@1.0.0 deploy
> serverless deploy --verbose

Deploying aws-lambda-typescript to stage dev (us-east-1)

Packaging
Compiling with Typescript...
Typescript compiled.
Excluding development dependencies for service package
Retrieving CloudFormation stack
Creating CloudFormation stack
  CREATE_IN_PROGRESS - AWS::CloudFormation::Stack - aws-lambda-typescript-dev
  CREATE_IN_PROGRESS - AWS::S3::Bucket - ServerlessDeploymentBucket
  CREATE_IN_PROGRESS - AWS::S3::Bucket - ServerlessDeploymentBucket
  CREATE_COMPLETE - AWS::S3::Bucket - ServerlessDeploymentBucket
  CREATE_IN_PROGRESS - AWS::S3::BucketPolicy - ServerlessDeploymentBucketPolicy
  CREATE_IN_PROGRESS - AWS::S3::BucketPolicy - ServerlessDeploymentBucketPolicy
  CREATE_COMPLETE - AWS::S3::BucketPolicy - ServerlessDeploymentBucketPolicy
  CREATE_COMPLETE - AWS::CloudFormation::Stack - aws-lambda-typescript-dev
Uploading
Uploading CloudFormation file to S3
Uploading State file to S3
Uploading service aws-lambda-typescript.zip file to S3 (98.19 kB)
Updating CloudFormation stack
  UPDATE_IN_PROGRESS - AWS::CloudFormation::Stack - aws-lambda-typescript-dev
  CREATE_IN_PROGRESS - AWS::Logs::LogGroup - SampleLogGroup
  CREATE_IN_PROGRESS - AWS::ApiGatewayV2::Api - HttpApi
  CREATE_IN_PROGRESS - AWS::IAM::Role - IamRoleLambdaExecution
  CREATE_IN_PROGRESS - AWS::IAM::Role - IamRoleLambdaExecution
  CREATE_IN_PROGRESS - AWS::Logs::LogGroup - SampleLogGroup
  CREATE_COMPLETE - AWS::Logs::LogGroup - SampleLogGroup
  CREATE_IN_PROGRESS - AWS::ApiGatewayV2::Api - HttpApi
  CREATE_COMPLETE - AWS::ApiGatewayV2::Api - HttpApi
  CREATE_IN_PROGRESS - AWS::ApiGatewayV2::Stage - HttpApiStage
  CREATE_IN_PROGRESS - AWS::ApiGatewayV2::Stage - HttpApiStage
  CREATE_COMPLETE - AWS::ApiGatewayV2::Stage - HttpApiStage
  CREATE_COMPLETE - AWS::IAM::Role - IamRoleLambdaExecution
  CREATE_IN_PROGRESS - AWS::Lambda::Function - SampleLambdaFunction
  CREATE_IN_PROGRESS - AWS::Lambda::Function - SampleLambdaFunction
  CREATE_COMPLETE - AWS::Lambda::Function - SampleLambdaFunction
  CREATE_IN_PROGRESS - AWS::ApiGatewayV2::Api - HttpApi
  CREATE_IN_PROGRESS - AWS::IAM::Role - IamRoleLambdaExecution
  CREATE_IN_PROGRESS - AWS::IAM::Role - IamRoleLambdaExecution  CREATE_IN_PROGRESS - AWS::Logs::LogGroup - SampleLogGroup
✔ Service deployed to stack aws-lambda-typescript-dev (124s)

endpoint: GET - https://i9uw76m827.execute-api.us-east-1.amazonaws.com/functions:
  sample: aws-lambda-typescript-dev-sample (98 kB)
Stack Outputs:
  SampleLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:761169812470:function:aws-lambda-typescript-dev-sample:1  HttpApiId: i9uw76m827
  ServerlessDeploymentBucketName: aws-lambda-typescript-de-serverlessdeploymentbuck-1wk377f3l6f7j  HttpApiUrl: https://i9uw76m827.execute-api.us-east-1.amazonaws.com

Monitor all your API routes with Serverless Console: run "serverless --console"
```
 - To check (Dev and Prod)
 
```
npm run check-dev
```
```
npm run check prod
```

  - Console succesful results:
  
  ```json
  {
    "statusCode": 200,
    "headers": {
        "content-type": "application/json"
    },
    "body": "{\"message\":\"Hello World!\"}"
  }
  ```
  
  Screenshots

![image](https://user-images.githubusercontent.com/22874642/182498554-5efbdbc7-f710-40d9-b8f9-4b05d1078207.png)

![image](https://user-images.githubusercontent.com/22874642/182498213-3fb315ee-89be-4eed-bd36-6295d3a2ad53.png)

![image](https://user-images.githubusercontent.com/22874642/182498251-9c661864-7be0-4cda-ae3e-8f9ff76ef045.png)

![image](https://user-images.githubusercontent.com/22874642/182498680-3bc79916-8d05-41a7-b5e4-5ddbadc2795c.png)



