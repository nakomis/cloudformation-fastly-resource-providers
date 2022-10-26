# Fastly::Tls::Certificate

Manage a Fastly service

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Fastly::Tls::Certificate",
    "Properties" : {
        "<a href="#certblob" title="CertBlob">CertBlob</a>" : <i>String</i>,
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#domainname" title="DomainName">DomainName</a>" : <i>String</i>,
        "<a href="#type" title="Type">Type</a>" : <i>String</i>,
        "<a href="#id" title="Id">Id</a>" : <i>String</i>,
        "<a href="#issuedto" title="IssuedTo">IssuedTo</a>" : <i>String</i>,
        "<a href="#issuer" title="Issuer">Issuer</a>" : <i>String</i>,
        "<a href="#notafter" title="NotAfter">NotAfter</a>" : <i>String</i>,
        "<a href="#notbefore" title="NotBefore">NotBefore</a>" : <i>String</i>,
        "<a href="#replace" title="Replace">Replace</a>" : <i>Boolean</i>,
        "<a href="#serialnumber" title="SerialNumber">SerialNumber</a>" : <i>String</i>,
        "<a href="#signaturealgorithm" title="SignatureAlgorithm">SignatureAlgorithm</a>" : <i>String</i>,
    }
}
</pre>

### YAML

<pre>
Type: Fastly::Tls::Certificate
Properties:
    <a href="#certblob" title="CertBlob">CertBlob</a>: <i>String</i>
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#domainname" title="DomainName">DomainName</a>: <i>String</i>
    <a href="#type" title="Type">Type</a>: <i>String</i>
    <a href="#id" title="Id">Id</a>: <i>String</i>
    <a href="#issuedto" title="IssuedTo">IssuedTo</a>: <i>String</i>
    <a href="#issuer" title="Issuer">Issuer</a>: <i>String</i>
    <a href="#notafter" title="NotAfter">NotAfter</a>: <i>String</i>
    <a href="#notbefore" title="NotBefore">NotBefore</a>: <i>String</i>
    <a href="#replace" title="Replace">Replace</a>: <i>Boolean</i>
    <a href="#serialnumber" title="SerialNumber">SerialNumber</a>: <i>String</i>
    <a href="#signaturealgorithm" title="SignatureAlgorithm">SignatureAlgorithm</a>: <i>String</i>
</pre>

## Properties

#### CertBlob

The PEM-formatted certificate blob.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

A customizable name for your certificate. Defaults to the certificate's Common Name or first Subject Alternative Names (SAN) entry.

_Required_: No

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### DomainName

The domain name.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Type

Resource type.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Id

Alphanumeric string identifying a TLS certificate.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IssuedTo

Alphanumeric string identifying a TLS certificate.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Issuer

The certificate authority that issued the certificate.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### NotAfter

Time-stamp (GMT) when the certificate will expire. Must be in the future to be used to terminate TLS traffic.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### NotBefore

Time-stamp (GMT) when the certificate will become valid. Must be in the past to be used to terminate TLS traffic.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Replace

A recommendation from Fastly indicating the key associated with this certificate is in need of rotation.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SerialNumber

A value assigned by the issuer that is unique to a certificate.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SignatureAlgorithm

The algorithm used to sign the certificate.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Name.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### CreatedAt

Date and time in ISO 8601 format. Read-only.

#### DeletedAt

Date and time in ISO 8601 format. Read-only.

#### UpdatedAt

Date and time in ISO 8601 format. Read-only.

#### Version

Returns the <code>Version</code> value.

