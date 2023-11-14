interface Guitar {
  model: string;
  specs: string[];
}

interface GuitarBuilder {
  setModel(model: string): GuitarBuilder;
  setSpecs(specs: string[]): GuitarBuilder;
  getResult(): Guitar;
}

class CustomGuitarBuilder implements GuitarBuilder {
  private guitar: Guitar = {
    model: "",
    specs: [],
  };

  setModel(model: string): GuitarBuilder {
    this.guitar = {...this.guitar, model };
    return this;
  }

  setSpecs(specs: string[]): GuitarBuilder {
    this.guitar = {...this.guitar, specs }
    return this;
  }

  getResult(): Guitar {
    return this.guitar;
  }
}

class GuitarFactory {
  private static instance: GuitarFactory;
  private inventory: Guitar[] = [];

  private constructor() {}

  static getInstance(): GuitarFactory {
    if (!this.instance) {
      this.instance = new GuitarFactory();
    }
    return this.instance;
  }
 

  createGuitar(builder: GuitarBuilder): Guitar {
    const customGuitar = builder.getResult();
    this.inventory.push(customGuitar);
    return customGuitar;
  }

  getInventory(): Guitar[] {
    return this.inventory;
  }
}

const strato = new CustomGuitarBuilder().setModel("Stratocaster").setSpecs(["Rosewood Fretboard", "Maple Neck"]);
const lesPaul = new CustomGuitarBuilder().setModel("Les Paul").setSpecs(["Rosewood Fretboard", "Mahogany Neck"]);

const factory = GuitarFactory.getInstance();
factory.createGuitar(strato);
const sameFactory = GuitarFactory.getInstance();
sameFactory.createGuitar(lesPaul);

const inventory = factory.getInventory();
console.log("Inventory:", inventory);