<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Add Students</h4>
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
          <button @click="saveStudent" class="btn btn-primary" type="button">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "studentCreate",
  data() {
    return {
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
  methods: {
    saveStudent() {
      const $mythis = this;
      axios
        .post("http://localhost:3000/students", this.model.student)
        .then((res) => {
          console.log(res.data);
          this.model.student = {
            name: "",
            course: "",
            email: "",
            phone: "",
          };
          this.$router.push({ name: "students" });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
