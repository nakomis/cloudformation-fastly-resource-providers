# Fastly::Logging::Splunk

Manage a Fastly Splunk Log.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Fastly::Logging::Splunk",
    "Properties" : {
        "<a href="#id" title="Id">Id</a>" : <i>String</i>,
        "<a href="#token" title="Token">Token</a>" : <i>String</i>
    }
}
</pre>

### YAML

<pre>
Type: Fastly::Logging::Splunk
Properties:
    <a href="#id" title="Id">Id</a>: <i>String</i>
    <a href="#token" title="Token">Token</a>: <i>String</i>
</pre>

## Properties

#### Id

Alphanumeric string identifying the service. Read-only.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Token

A Splunk token for use in posting logs over HTTP to your collector.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Id.
