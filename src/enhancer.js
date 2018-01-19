export class Enhancer {
    __debug() {
        this.__DEBUG = true;
    }
    enhance(registry) {
        let entries = registry.getAll();
        let keys = Object.keys(entries);
        return keys.map((key) => {
            this.enhanceEntry(entries[key]);
        });
    }

    // Force option is used
    enhanceEntry(registryEntry, force) {
        if(this.__DEBUG) {
            registryEntry.__debug();
        }

        registryEntry.enhance(force);
    }
}