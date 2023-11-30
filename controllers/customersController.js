// Route handlers for customers
 exports.getAllCustomers = async (req, res, next) => {
    res.send("Get All Customers Route");  
};
    
exports.getCustomersById = (req, res, next) => {
    res.send("Get Customer By Id Route");
};
    
exports.createCustomers = (req, res, next) => {
    res.send("Create New Customer Route");
};
    
exports.updateCustomers = (req, res, next) => {
    res.send("Update Customer Route");
};
    
exports.deleteCustomers = (req, res, next) => {
    res.send("Delete Customer Route"); 
};