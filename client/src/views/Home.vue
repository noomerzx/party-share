<template>
  <div class="px-4 py-5">
    <div class="mb-5">
      <h1 class="title text-center">เข้าสู่ระบบ</h1>
    </div>
    <div>
      <div class="field">
        <label class="label is-pulled-left">อีเมล์</label>
        <div class="control">
          <input class="input" type="text" placeholder="โปรดระบุอีเมล์" v-model="email">
        </div>
      </div>
      <div class="field mb-5">
        <label class="label is-pulled-left">รหัสผ่าน</label>
        <div class="control">
          <input class="input" type="text" placeholder="โปรดระบุรหัสผ่าน" v-model="password">
        </div>
      </div>
      <button class="button is-primary is-pulled-right" @click="login">เข้าสู่ระบบ</button>
      <button class="button is-link is-pulled-left" @click="goToRegister">สมัครสมาชิก</button>
    </div>
  </div>
</template>

<script lang="ts">
import UserProvider from '../providers/user.provider'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MainIndex extends Vue {
  private userProvider: UserProvider = new UserProvider()
  private email = ''
  private password = ''

  private async login (): Promise<any> {
    try {
      const token = this.userProvider.login(this.email, this.password)
      this.$router.push({ name: 'party' })
    } catch (e) {
      console.log(e)
    }
  }

  private async goToRegister (): Promise<any> {
    this.$router.push({ name: 'register' })
  }
}

</script>
