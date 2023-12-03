// Route handlers for customers
exports.getAllCustomers = async (req, res, next) => {
    res.send("Get All Customers Route");  
};
    
exports.getCustomersById = (req, res, next) => {
    res.send("Get Customer By Id Route");
};
    
exports.createCustomer = (req, res, next) => {
    res.send("Create New Customer Route");
};
    
exports.updateCustomer = (req, res, next) => {
    res.send("Update Customer Route");
};
    
exports.deleteCustomer = (req, res, next) => {
    res.send("Delete Customer Route"); 
};
