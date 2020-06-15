<template>
  <div class="px-4 py-5">
    <div class="mb-5">
      <h1 class="title text-center">สร้างปาร์ตี้</h1>
    </div>
    <div>
      <div class="field">
        <label class="label is-pulled-left">ชื่อปาร์ตี้</label>
        <div class="control">
          <input class="input" type="text" placeholder="โปรดระบุชื่อปาร์ตี้" v-model="name">
        </div>
      </div>
      <div class="field">
        <label class="label is-pulled-left">สถานที่</label>
        <div class="control">
          <input class="input" type="text" placeholder="โปรดระบุสถานที่" v-model="location">
        </div>
      </div>
      <div class="field">
        <label class="label is-pulled-left">จำนวนคน</label>
        <div class="control">
          <input class="input" type="number" placeholder="โปรดระบุจำนวนคน" v-model="size">
        </div>
      </div>
      <div class="field">
        <label class="label is-pulled-left">วันที่</label>
        <div class="control">
          <input class="input" type="date" placeholder="โปรดระบุวันที่จัดงาน" v-model="date">
        </div>
      </div>
      <div class="text-center">
        <button class="button is-primary" @click="create">สร้าง</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PartyProvider from '../providers/party.provider'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Register extends Vue {
  private partyProvider: PartyProvider = new PartyProvider()
  private name = ''
  private location = ''
  private size = 0
  private date = ''

  private async create (): Promise<any> {
    try {
      const date = new Date(this.date)
      await this.partyProvider.create(this.name, this.size, this.location, date.getTime().toString())
      this.$router.push({ name: 'party' })
    } catch (e) {
      console.log(e)
    }
  }
}

</script>
