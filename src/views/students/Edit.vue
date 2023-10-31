<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Edit Students</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="">Name</label>
          <input
            required
            type="text"
            v-model="model.student.name"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="">Course</label>
          <input
            required
            type="text"
            v-model="model.student.course"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="">Email</label>
          <input
            required
            type="text"
            v-model="model.student.email"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="">Phone</label>
          <input
            required
            type="text"
            v-model="model.student.phone"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <button @click="updateStudent" class="btn btn-primary" type="button">
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "studentEdit",
  data() {
    return {
      studentId: "",
      model: {
        student: {
          name: "",
          course: "",
          email: "",
          phone: "",
        },
      },
    };
  },
  mounted() {
    // console.log(this.$route.params.id);
    this.studentId = this.$route.params.id;
    console.log(this.studentId);
    this.getStudentData(this.$route.params.id);
  },
  methods: {
    getStudentData(studentId) {
      axios
        .get(`http://localhost:3000/students/${studentId}`)
        .then((res) => {
          console.log(res.data);
          this.model.student = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    updateStudent() {
      axios
        .put(
          `http://localhost:3000/students/${this.studentId}`,
          this.model.student
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
