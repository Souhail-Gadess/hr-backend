import Employee from '../models/Employee.js'

const hrService = {

  getAllEmployees: (callback) => {
    Employee.getAll(callback)
  },

  getEmployeeById: (id, callback) => {
    Employee.getById(id, callback)
  },

  createEmployee: (data, callback) => {
    Employee.create(data, callback)
  },

  updateEmployee: (id, data, callback) => {
    Employee.update(id, data, callback)
  },

  deleteEmployee: (id, callback) => {
    Employee.delete(id, callback)
  }

}

export default hrService