# Challenge
Build Guitar Factory System where you can specify details of a guitar and the system creates a custom guitar for you with OS, Specs, Models. The system should keep track of Inventory.

### Proposal
Challenge name suggests using a Factory, but `Factory Method` needs to know the concrete classes to return the equivalent product, and in the text we'll specify details of guitar and system will return a custom guitar, which seems to fit a Builder pattern to solve.
We also need to keep track of inventory, so having a Singleton would ensure we always access the same instance of the "Factory" class and get the current value of its inventory

### Patterns Candidates
Builder - Builder pattern can be used to create each custom guitar

Singleton - Having a Singleton class for factory, we ensure that we always get the same instance inventory

# poc-guitar-factory-system

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.1. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
