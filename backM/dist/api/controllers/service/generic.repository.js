"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericRepository = function (Item) {
    /**
     * save one Item and return Promise
     */
    this.save = item => item.save();
    /**
     * get All item with the possibility to populate result with objects belong to him
     */
    this.getAll = function (creterias = null) {
        return (creterias !== null) ? Item.find(creterias).exec() : Item.find().exec();
    };
    /*
    */
    this.getByFiltering = function (creterias, fields = null) {
        return (fields !== null) ? Item.find(creterias, fields).exec() : Item.find(creterias).exec();
    };
    /**
     * get One item by Id
     */
    this.getOne = id => Item.findById(id).exec();
    this.getOnePopulate = (id, populate) => Item.findById(id).populate(populate)
        .exec();
    /**
     *  generic function which can give us information
     *  that we need in one item. This function will get in params
     *  two field, the first is an object of criteria that we want to make
     *  the selection. Ex: {email: email,_id: _id}
     *  and the second params is the string of fields that we would get back
     *  Ex: 'name _id token'. If we omit the second params we give back all the field defining at selecting: true
     */
    this.getOneBy = function (creterias, fields = null) {
        return (fields !== null) ? Item.findOne(creterias, fields).exec() : Item.findOne(creterias).exec();
    };
};
exports.default = GenericRepository;
//# sourceMappingURL=generic.repository.js.map