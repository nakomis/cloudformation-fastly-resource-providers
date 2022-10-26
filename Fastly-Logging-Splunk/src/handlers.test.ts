import {resource} from "./handlers";
import {ResourceModel, TypeConfigurationModel} from "./models";
import {Account} from "aws-sdk";
import foo from "../inputs/inputs_1_create.json"
import {CaseTransformer, Transformer} from '../../Fastly-Common/src/util';

var createdModel: ResourceModel;
jest.setTimeout(1000000);

describe("ApplicationHandler tests", () => {
    it("should create app", async () => {
            createdModel = new ResourceModel(<ResourceModel>{
                serviceId: "0lA7DJyR4OghKSdVc4Zpjv",
                version: "3",
                name: "MySplunkEndpoint",
                token: "MySplunkToken",
                url: "https://mysplunkhost:8088/services/collector/event/1.0"
            });

            let typeConfiguration: TypeConfigurationModel = new TypeConfigurationModel(<TypeConfigurationModel>{
                    fastlyAccess: {
                        token: "YrJIbeZMgxJikdrgeP5up4sE6BqpoW_J"
                    }
                }
            )
            var c;
            try {
                let c = await resource.create(createdModel, typeConfiguration);
                console.log(c);
            } catch (e) {
                console.log(e);
            }
            console.log(c)

            let g = await resource.get(createdModel, typeConfiguration);

            let gr = await resource.setModelFrom(new ResourceModel(), g);

            try {
                await resource.delete(gr, typeConfiguration);
            } catch (e) {
                console.log(e);
            }

            console.log("done");
            // let foo = await resource.list(createdModel, typeConfiguration);
            // console.log(foo);
        }
    )

})