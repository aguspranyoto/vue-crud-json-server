<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>
          Students
          <RouterLink to="/students/create" class="btn btn-primary float-end"
            >Add Student</RouterLink
          >
        </h3>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="this.students.length > 0">
            <tr v-for="(student, index) in this.students" :key="index">
              <td>{{ student.id }}</td>
              <td>{{ student.name }}</td>
              <td>{{ student.course }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.phone }}</td>
              <td>
                <RouterLink
                  :to="{ path: '/students/' + student.id }"
                  class="btn btn-success"
                  >Edit</RouterLink
                >
                <button
                  type="button"
                  @click="deleteStudent(student.id)"
                  class="btn btn-danger mx-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="6">Loading...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "students",
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    this.getStudents();
  },
  methods: {
    getStudents() {
      axios.get("http://localhost:3000/students").then((res) => {
        this.students = res.data;
        // console.log(this.students);
      });
    },
    deleteStudent(studentId) {
      if (confirm("Are you sure?")) {
        // console.log(studentId);
        axios
          .delete(`http://localhost:3000/students/${studentId}`)
          .then((res) => {
            this.getStudents();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  },
};
</script>
