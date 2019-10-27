export class Recipe {
    private name: string;
    private description: string;
    private imagePath: string;

    constructor(name: string, description: string, imagePath: string) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }

    public GetName() {
        return this.name;
    }

    public GetDescription() {
        return this.description;
    }

    public GetImagePath() {
        return this.imagePath;
    }

    public SetName(name: string) {
        this.name = name;
    }

    public SetDescription(description: string) {
        this.description = description;
    }

    public SetImagePath(imagePath: string) {
        this.imagePath = imagePath;
    }
}