let PersonP = function(nm, id){
    this.name = nm
    this.id = id}

PersonP.prototype.getDetails = function() {
    return `name: ${this.name} / id: ${this.id}`}

let EmployeeP = function(nm, id, salary){
    PersonP.call(nm, id)
    this.salary = salary}

Object.setPrototypeOf(EmployeeP, PersonP.prototype)

console.log(EmployeeP.name)