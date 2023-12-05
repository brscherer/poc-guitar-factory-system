interface Guitar {
  model: string;
  specs: string[];
}

interface GuitarBuilder {
  createGuitar(): void;
  getResult(): Guitar;
}

class StratocasterBuilder implements GuitarBuilder {
  private guitar: Guitar = {
    model: "Stratocaster",
    specs: [],
  };

  createGuitar(): void {
    this.guitar.specs.push("Rosewood Fretboard", "Maple Neck");
  }

  getResult(): Guitar {
    return this.guitar;
  }
}

class LesPaulBuilder implements GuitarBuilder {
  private guitar: Guitar = {
    model: "Les Paul",
    specs: [],
  };

  createGuitar(): void {
    this.guitar.specs.push("Rosewood Fretboard", "Mahogany Neck");
  }

  getResult(): Guitar {
    return this.guitar;
  }
}

interface GuitarFactory {
  createGuitar(builder: GuitarBuilder): Guitar;
  getInventory(): Guitar[];
}

class CustomGuitarFactory implements GuitarFactory {
  private static instance: CustomGuitarFactory;
  private inventory: Guitar[] = [];

  private constructor() {}

  static getInstance(): CustomGuitarFactory {
    if (!this.instance) {
      this.instance = new CustomGuitarFactory();
    }
    return this.instance;
  }

  createGuitar(builder: GuitarBuilder): Guitar {
    builder.createGuitar();
    const customGuitar = builder.getResult();
    this.inventory.push(customGuitar);
    return customGuitar;
  }

  getInventory(): Guitar[] {
    return this.inventory;
  }
}

const stratoBuilder = new StratocasterBuilder();
const lesPaulBuilder = new LesPaulBuilder();

const factory = CustomGuitarFactory.getInstance();
factory.createGuitar(stratoBuilder);
factory.createGuitar(lesPaulBuilder);

const inventory = factory.getInventory();
console.log("Inventory:", inventory);
