<template>
  <div class="px-4 py-5">
    <div class="mb-5">
      <h1 class="title text-center">สร้างบัญชีผู้ใช้</h1>
    </div>
    <div>
      <div class="field">
        <label class="label is-pulled-left">ชื่อจริง</label>
        <div class="control">
          <input class="input" type="text" placeholder="โปรดระบุชื่อผู้ใช้..." v-model="firstName">
        </div>
      </div>
      <div class="field">
        <label class="label is-pulled-left">นามสกุล</label>
        <div class="control">
          <input class="input" type="text" placeholder="โปรดระบุชื่อผู้ใช้..." v-model="lastName">
        </div>
      </div>
      <div class="field">
        <label class="label is-pulled-left">ชื่อผู้ใช้งาน (อีเมล์)</label>
        <div class="control">
          <input class="input" type="text" placeholder="โปรดระบุชื่อผู้ใช้..." v-model="email">
        </div>
      </div>
      <div class="field">
        <label class="label is-pulled-left">รหัสผ่าน</label>
        <div class="control">
          <input class="input" type="password" placeholder="โปรดระบุรหัสผ่าน..." v-model="password">
        </div>
      </div>
      <div class="mb-5">
        <label class="checkbox"><input class="mr-2" v-model="accept1" type="checkbox">ฉันยอมรับเงื่อนไขและข้อตกลงในการใช้งาน PartyHaan รวมถึงนโยบายความเป็นส่วนตัว</label>
        <label class="checkbox"><input class="mr-2" v-model="accept2" type="checkbox">ฉันต้องการรับข่าวสารเกี่ยวกับโปรโมชั่นจาก PartyHaan</label>
      </div>
      <div class="text-center">
        <button class="button is-primary" @click="register" :disabled="!accept1 || !accept2">สมัครสมาชิก</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import UserProvider from '../providers/user.provider'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Register extends Vue {
  private userProvider: UserProvider = new UserProvider()
  private email = ''
  private password = ''
  private firstName = ''
  private lastName = ''
  private accept1 = false
  private accept2 = false

  private async register (): Promise<any> {
    try {
      await this.userProvider.register(this.firstName, this.lastName, this.email, this.password)
      this.$router.push({ name: 'home' })
    } catch (e) {
      console.log(e)
    }
  }
}

</script>
