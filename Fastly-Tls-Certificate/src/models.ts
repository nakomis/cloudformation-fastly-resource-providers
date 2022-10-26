// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Fastly::Tls::Certificate';

    @Exclude()
    protected readonly IDENTIFIER_KEY_NAME: string = '/properties/Name';

    @Expose({ name: 'CertBlob' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'certBlob', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    certBlob?: Optional<string>;
    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'DomainName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'domainName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    domainName?: Optional<string>;
    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'CreatedAt' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'createdAt', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    createdAt?: Optional<string>;
    @Expose({ name: 'DeletedAt' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'deletedAt', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    deletedAt?: Optional<string>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'IssuedTo' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'issuedTo', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    issuedTo?: Optional<string>;
    @Expose({ name: 'Issuer' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'issuer', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    issuer?: Optional<string>;
    @Expose({ name: 'NotAfter' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'notAfter', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    notAfter?: Optional<string>;
    @Expose({ name: 'NotBefore' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'notBefore', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    notBefore?: Optional<string>;
    @Expose({ name: 'Replace' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'replace', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    replace?: Optional<boolean>;
    @Expose({ name: 'SerialNumber' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'serialNumber', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    serialNumber?: Optional<string>;
    @Expose({ name: 'SignatureAlgorithm' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'signatureAlgorithm', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    signatureAlgorithm?: Optional<string>;
    @Expose({ name: 'UpdatedAt' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'updatedAt', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    updatedAt?: Optional<string>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.name != null) {
            identifier[this.IDENTIFIER_KEY_NAME] = this.name;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 1 ? identifier : null;
    }

    @Exclude()
    public getAdditionalIdentifiers(): Array<Dict> {
        const identifiers: Array<Dict> = new Array<Dict>();
        // only return the identifiers if any can be used
        return identifiers.length === 0 ? null : identifiers;
    }
}

export class TypeConfigurationModel extends BaseModel {
    ['constructor']: typeof TypeConfigurationModel;


    @Expose({ name: 'FastlyAccess' })
    @Type(() => FastlyAccess)
    fastlyAccess?: Optional<FastlyAccess>;

}

export class FastlyAccess extends BaseModel {
    ['constructor']: typeof FastlyAccess;


    @Expose({ name: 'Token' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'token', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    token?: Optional<string>;

}

