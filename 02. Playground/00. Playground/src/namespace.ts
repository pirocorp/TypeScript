import { ISuv } from "./interface";

namespace Vehicles {
    export class Suv implements ISuv {
        constructor(public model: string){
        }

        drive(): string {
            return `I'm driving ${this.model}`;
        }
    }

    export class SmallSuv extends Suv {
        constructor(model: string, private size: number){
            super(model);
        }

        park(): void {
            console.log(`Parking ${this.model} in size ${this.size}`);            
        }

        drive(): string {
            return `${super.drive()} Small SUV`;
        }
    }
}

export default Vehicles;