interface Car {
    _id: import('bson').ObjectId;
    name: string;
    make: string;
    color: string;
    kilometre: number;
    year: Date;

}
export default Car