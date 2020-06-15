<template>
  <div class="px-4 py-5">
    <div class="header text-center is-relative">
      <h1 class="title">ปาร์ตี้ทั้งหมด</h1>
      <button class="button button-create is-primary is-pulled-right" @click="goToCreatePage">สร้างปาร์ตี้ใหม่</button>
    </div>
    <div class="columns is-multiline">
      <div class="column is-6" v-for="p in parties" :key="p.partyId">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              ชื่อปาร์ตี้: {{p.partyName}}
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              สถานที่ : {{p.partyLocation}}
              <hr>
              <div>จำนวนคน {{p.partyAttendee}} / {{p.partySize}}</div>
            </div>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item" :disabled="p.joined === 'true'" v-if="p.joined === 'true'">คุณร่วมปาร์ตี้นี้แล้ว</div>
            <a href="#" class="card-footer-item" @click="joinParty(p.partyId)" v-else>เข้าร่วมปาร์ตี้</a>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PartyProvider from '../providers/party.provider'
import IParty from '../models/party'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MainIndex extends Vue {
  private partyProvider: PartyProvider = new PartyProvider()
  private parties: IParty[] = []

  private async created (): Promise<any> {
    this.fetchParty()
  }

  private async fetchParty (): Promise<any> {
    try {
      this.parties = await this.partyProvider.getParties(1, 10)
    } catch (e) {
      console.log(e)
    }
  }

  private async joinParty (partyId: number): Promise<any> {
    try {
      await this.partyProvider.join(partyId)
      this.fetchParty()
    } catch (e) {
      console.log(e)
    }
  }

  private async goToRegister (): Promise<any> {
    this.$router.push({ name: 'register' })
  }

  private goToCreatePage (): void {
    this.$router.push({ name: 'party-create' })
  }
}

</script>

<style>
.header {
  border-bottom: 2px solid black;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.button-create {
  position: absolute;
  top: 0px;
  right: 0px;
}
</style>
