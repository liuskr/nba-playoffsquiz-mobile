<template>
  <div class="team_container">
    <div class="team_8">
      <div class="team_8_4">
        <template v-for="(item, key) in teamList" :key="key">
          <div class="team_8_4_left" v-if="key == 0" @click="showPopup(item)">
            <div class="ranking_t">1</div>
            <div class="team_list">
              <div class="team_logo">
                <img class="top_logo" :src="item.TeamAData.imgUrl" alt="" />
                <img class="bottom_logo" :src="item.TeamBData.imgUrl" alt="" />
              </div>
              <div class="team_content">
                <div class="ranks">
                  <span :class="{ special: item.nameAlength }">{{ item.TeamAData.Name }}</span>
                  <span class="ranking_count">{{ item.ScoreA }}</span>
                </div>
                <div class="vs">VS</div>
                <div class="ranks">
                  <span :class="{ special: item.nameBlength }"> {{ item.TeamBData.Name }}</span>
                  <span class="ranking_count"> {{ item.ScoreB }}</span>
                </div>
              </div>
            </div>
            <div class="ranking_b">8</div>
          </div>
          <div class="team_8_4_right" v-if="key == 1" @click="showPopup(item)">
            <div class="f_r">
              <div class="ranking_t">
                <span>4</span>
              </div>
            </div>
            <div class="team_list">
              <div class="team_content">
                <div class="ranks">
                  <span :class="{ special: item.nameAlength }">{{ item.TeamAData.Name }}</span>
                  <span class="ranking_count">{{ item.ScoreA }}</span>
                </div>
                <div class="vs">VS</div>
                <div class="ranks">
                  <span :class="{ special: item.nameBlength }"> {{ item.TeamBData.Name }}</span>
                  <span class="ranking_count"> {{ item.ScoreB }}</span>
                </div>
              </div>
              <div class="team_logo">
                <img class="top_logo" :src="item.TeamAData.imgUrl" alt="" />
                <img class="bottom_logo" :src="item.TeamBData.imgUrl" alt="" />
              </div>
            </div>
            <div class="f_r">
              <div class="ranking_b">5</div>
            </div>
          </div>
        </template>
      </div>
      <div class="team_8_4">
        <template v-for="(item, key) in teamList" :key="key">
          <div class="team_8_4_left" v-if="key == 2" @click="showPopup(item)">
            <div class="ranking_t">3</div>
            <div class="team_list">
              <div class="team_logo">
                <img class="top_logo" :src="item.TeamAData.imgUrl" alt="" />
                <img class="bottom_logo" :src="item.TeamBData.imgUrl" alt="" />
              </div>
              <div class="team_content">
                <div class="ranks">
                  <span :class="{ special: item.nameAlength }">{{ item.TeamAData.Name }}</span>
                  <span class="ranking_count">{{ item.ScoreA }}</span>
                </div>
                <div class="vs">VS</div>
                <div class="ranks">
                  <span :class="{ special: item.nameBlength }"> {{ item.TeamBData.Name }}</span>
                  <span class="ranking_count"> {{ item.ScoreB }}</span>
                </div>
              </div>
            </div>
            <div class="ranking_b">6</div>
          </div>
          <div class="team_8_4_right" v-if="key == 3" @click="showPopup(item)">
            <div class="f_r">
              <div class="ranking_t">
                <span>2</span>
              </div>
            </div>
            <div class="team_list">
              <div class="team_content">
                <div class="ranks">
                  <span :class="{ special: item.nameAlength }">{{ item.TeamAData.Name }}</span>
                  <span class="ranking_count">{{ item.ScoreA }}</span>
                </div>
                <div class="vs">VS</div>
                <div class="ranks">
                  <span :class="{ special: item.nameBlength }">
                    {{ item.TeamBData.Name.length >= 4 ? item.TeamBData.Name.slice(0, 2) : item.TeamBData.Name }}
                    <!-- 凯尔 -->
                    <div v-if="item.TeamBData.Name.length >= 4">{{ item.TeamBData.Name.slice(2, 4) }}</div>
                  </span>
                  <span class="ranking_count"> {{ item.ScoreB }}</span>
                </div>
              </div>
              <div class="team_logo">
                <img class="top_logo" :src="item.TeamAData.imgUrl" alt="" />
                <img class="bottom_logo" :src="item.TeamBData.imgUrl" alt="" />
              </div>
            </div>
            <div class="f_r">
              <div class="ranking_b">7</div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="section">
      <div class="line">
        <div class="line_l">
          <div class="line_t"></div>
          <div class="line_b">
            <i class="v"></i>
          </div>
        </div>
        <div class="line_r">
          <div class="line_t"></div>
          <div class="line_b">
            <i class="v"></i>
          </div>
        </div>
      </div>
      <div class="team_4">
        <div class="team_4_2" v-for="(item, key) in secondEastTeam" :key="key" @click="showPopup(item)">
          <div class="team_item">
            <img class="team_logo" :src="item.TeamAData.imgUrl" alt="" v-if="item.TeamAData" />
            <img class="team_logo" src="@assets/images/card/doong-kong.png" alt="" v-else />
            <div class="team_name">
              <span v-if="item.TeamAData">{{ item.TeamAData.Name }} {{ item.ScoreA == null ? '?' : item.ScoreA }}</span>
              <span class="text" v-else>?</span>
            </div>
          </div>
          <div class="team_item">
            <img class="team_logo" :src="item.TeamBData.imgUrl" alt="" v-if="item.TeamBData" />
            <img class="team_logo" src="@assets/images/card/doong-kong.png" alt="" v-else />
            <div class="team_name">
              <span v-if="item.TeamBData">{{ item.TeamBData.Name }} {{ item.ScoreB == null ? '?' : item.ScoreB }}</span>
              <span class="text" v-else>?</span>
            </div>
          </div>
        </div>
      </div>
      <div class="team_2_block">
        <div class="line_l"></div>
        <div class="team_4_2">
          <div class="team_item">
            <img class="team_logo" src="@assets/images/card/doong-kong.png" alt="" />
            <div class="team_name">
              <span class="text">?</span>
              <!-- <span>4</span> -->
            </div>
          </div>
          <div class="team_item">
            <img class="team_logo" src="@assets/images/card/doong-kong.png" alt="" />
            <div class="team_name">
              <span class="text">?</span>
              <!-- <span>4</span> -->
            </div>
          </div>
        </div>
        <div class="line_r"></div>
      </div>
      <div class="team_2_inline">
        <div class="team_l">
          <img class="team_logo" src="@assets/images/card/xi-kong.png" alt="" />
        </div>
        <div class="team_2_content">
          <div class="team_2_content_item">
            <span class="name">?</span>
            <!-- <span>4</span> -->
          </div>
          <div class="trophy">
            <img src="@assets/images/jiangbei.png" alt="" />
          </div>
          <div class="team_2_content_item">
            <span class="name">?</span>
            <!-- <span>4</span> -->
          </div>
        </div>
        <div class="team_r">
          <img class="team_logo" src="@assets/images/card/2-kong.png" alt="" />
        </div>
      </div>
      <div class="team_2_block team_2_block_bottom">
        <div class="line_l"></div>
        <div class="team_4_2">
          <div class="team_item">
            <img class="team_logo" src="@assets/images/card/xi-kong.png" alt="" />
            <div class="team_name">
              <span class="text">?</span>
              <!-- <span>4</span> -->
            </div>
          </div>
          <div class="team_item">
            <img class="team_logo" src="@assets/images/card/xi-kong.png" alt="" />
            <div class="team_name">
              <span class="text">?</span>
              <!-- <span>4</span> -->
            </div>
          </div>
        </div>
        <div class="line_r"></div>
      </div>
      <div class="team_4">
        <div class="team_4_2" v-for="(item, key) in secondWestTeam" :key="key" @click="showPopup(item)">
          <div class="team_item">
            <img class="team_logo" :src="item.TeamAData.imgUrl" alt="" v-if="item.TeamAData" />
            <img class="team_logo" src="@assets/images/card/doong-kong.png" alt="" v-else />
            <div class="team_name">
              <span v-if="item.TeamAData">{{ item.TeamAData.Name }} {{ item.ScoreA == null ? '?' : item.ScoreA }}</span>
              <span class="text" v-else>?</span>
            </div>
          </div>
          <div class="team_item">
            <img class="team_logo" :src="item.TeamBData.imgUrl" alt="" v-if="item.TeamBData" />
            <img class="team_logo" src="@assets/images/card/doong-kong.png" alt="" v-else />
            <div class="team_name">
              <span v-if="item.TeamBData">{{ item.TeamBData.Name }} {{ item.ScoreB == null ? '?' : item.ScoreB }}</span>
              <span class="text" v-else>?</span>
            </div>
          </div>
        </div>
      </div>
      <div class="line line_bottom">
        <div class="line_l">
          <div class="line_b">
            <i class="v"></i>
          </div>
          <div class="line_t"></div>
        </div>
        <div class="line_r">
          <div class="line_b">
            <i class="v"></i>
          </div>
          <div class="line_t"></div>
        </div>
      </div>
    </div>
    <div class="team_8">
      <div class="team_8_4">
        <template v-for="(item, key) in teamList" :key="key">
          <div class="team_8_4_left" v-if="key == 4" @click="showPopup(item)">
            <div class="ranking_t">1</div>
            <div class="team_list">
              <div class="team_logo">
                <img class="top_logo" :src="item.TeamAData.imgUrl" alt="" />
                <img class="bottom_logo" :src="item.TeamBData.imgUrl" alt="" />
              </div>
              <div class="team_content">
                <div class="ranks">
                  <span :class="{ special: item.nameAlength }">{{ item.TeamAData.Name }}</span>
                  <span class="ranking_count">{{ item.ScoreA }}</span>
                </div>
                <div class="vs">VS</div>
                <div class="ranks">
                  <span :class="{ special: item.nameBlength }"> {{ item.TeamBData.Name }}</span>
                  <span class="ranking_count"> {{ item.ScoreB }}</span>
                </div>
              </div>
            </div>
            <div class="ranking_b">8</div>
          </div>
          <div class="team_8_4_right" v-if="key == 5" @click="showPopup(item)">
            <div class="f_r">
              <div class="ranking_t">
                <span>4</span>
              </div>
            </div>
            <div class="team_list">
              <div class="team_content">
                <div class="ranks">
                  <span :class="{ special: item.nameAlength }">{{ item.TeamAData.Name }}</span>
                  <span class="ranking_count">{{ item.ScoreA }}</span>
                </div>
                <div class="vs">VS</div>
                <div class="ranks">
                  <span :class="{ special: item.nameBlength }"> {{ item.TeamBData.Name }}</span>
                  <span class="ranking_count"> {{ item.ScoreB }}</span>
                </div>
              </div>
              <div class="team_logo">
                <img class="top_logo" :src="item.TeamAData.imgUrl" alt="" />
                <img class="bottom_logo" :src="item.TeamBData.imgUrl" alt="" />
              </div>
            </div>
            <div class="f_r">
              <div class="ranking_b">5</div>
            </div>
          </div>
        </template>
      </div>
      <div class="team_8_4">
        <slot v-for="(item, key) in teamList" :key="key">
          <div class="team_8_4_left" v-if="key == 6" @click="showPopup(item)">
            <div class="ranking_t">3</div>
            <div class="team_list">
              <div class="team_logo">
                <img class="top_logo" :src="item.TeamAData.imgUrl" alt="" />
                <img class="bottom_logo" :src="item.TeamBData.imgUrl" alt="" />
              </div>
              <div class="team_content">
                <div class="ranks">
                  <span :class="{ special: item.nameAlength }">{{ item.TeamAData.Name }}</span>
                  <span class="ranking_count">{{ item.ScoreA }}</span>
                </div>
                <div class="vs">VS</div>
                <div class="ranks">
                  <span :class="{ special: item.nameBlength }"> {{ item.TeamBData.Name }}</span>
                  <span class="ranking_count"> {{ item.ScoreB }}</span>
                </div>
              </div>
            </div>
            <div class="ranking_b">6</div>
          </div>
          <div class="team_8_4_right" v-if="key == 7" @click="showPopup(item)">
            <div class="f_r">
              <div class="ranking_t">
                <span>2</span>
              </div>
            </div>
            <div class="team_list">
              <div class="team_content">
                <div class="ranks">
                  <span :class="{ special: item.nameAlength }">{{ item.TeamAData.Name }}</span>
                  <span class="ranking_count">{{ item.ScoreA }}</span>
                </div>
                <div class="vs">VS</div>
                <div class="ranks">
                  <span :class="{ special: item.nameBlength }"> {{ item.TeamBData.Name }}</span>
                  <span class="ranking_count"> {{ item.ScoreB }}</span>
                </div>
              </div>
              <div class="team_logo">
                <img class="top_logo" :src="item.TeamAData.imgUrl" alt="" />
                <img class="bottom_logo" :src="item.TeamBData.imgUrl" alt="" />
              </div>
            </div>
            <div class="f_r">
              <div class="ranking_b">7</div>
            </div>
          </div>
        </slot>
      </div>
    </div>

    <PopupView :show="showPop" :info="popInfo" @click="close" v-if="showPop" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { getUserGuess } from '@apis'
import PopupView from '../popup/index.vue'

const teamList = ref([]) // 战队
const showPop = ref(false)
const popInfo = ref({})

const secondEastTeam = ref([]) // 东部晋级第二轮队伍
const secondWestTeam = ref([]) // 西部晋级第二轮队伍

// 显示预测输入弹框
const showPopup = (item) => {
  if (item.State == 2 || !item.TeamAData || !item.TeamBData) {
    return
  }
  popInfo.value = item
  showPop.value = true
}

// 关闭弹框 更新数据
const close = (ScoreA, ScoreB) => {
  if (ScoreA !== undefined) {
    if (popInfo.value.dataType == 'second') {
      secondEastTeam.value.forEach((item) => {
        console.log(item)

        if (item.TeamAData && item.TeamAData.Name == popInfo.value.TeamAData.Name) {
          item.ScoreA = ScoreA
          item.ScoreB = ScoreB
          return item
        }
      })
      secondWestTeam.value.forEach((item) => {
        if (item.TeamAData && item.TeamAData.Name == popInfo.value.TeamAData.Name) {
          item.ScoreA = ScoreA
          item.ScoreB = ScoreB
          return item
        }
      })
    } else {
      teamList.value.forEach((item) => {
        if (item.ID == popInfo.value.ID) {
          item.ScoreA = ScoreA
          item.ScoreB = ScoreB
          return item
        }
      })

      calculationEast()
    }
  }
  popInfo.value = {}
  showPop.value = false
}

// 计算晋级第二轮队伍
const calculationEast = () => {
  secondEastTeam.value = []
  secondWestTeam.value = []

  // 切割，两个为一组
  const list = []
  for (let i = 0; i < teamList.value.length; i += 2) {
    list.push(teamList.value.slice(i, i + 2))
  }

  for (let index = 0; index < list.length; index++) {
    const element = list[index]
    const obj = { ScoreA: null, ScoreB: null, TeamAData: null, TeamBData: null, dataType: 'second' }
    element.map((item, key) => {
      let data = null
      if (Number(item.ScoreA) >= 4) {
        data = item.TeamAData
      }
      if (Number(item.ScoreB) >= 4) {
        data = item.TeamBData
      }
      if (key == 0) {
        obj.TeamAData = data
      } else {
        obj.TeamBData = data
      }
    })
    // 东部
    if (index < 2) {
      secondEastTeam.value.push(obj)
    } else {
      // 西部
      secondWestTeam.value.push(obj)
    }
  }

  console.log(secondEastTeam.value)

  console.log(secondWestTeam.value)
}

onMounted(() => {
  getUserGuess().then(({ data }) => {
    if (data.Data.Games.length) {
      console.log(data.Data.Games)
      teamList.value = data.Data.Games.map((item: any) => {
        item.TeamAData.imgUrl = new URL(`../../../../assets/images/card/${item.TeamAData.Name}.png`, import.meta.url).href
        item.TeamBData.imgUrl = new URL(`../../../../assets/images/card/${item.TeamBData.Name}.png`, import.meta.url).href
        item.TeamAData.popimgUrl = new URL(`../../../../assets/images/pop/${item.TeamAData.Name}.png`, import.meta.url).href
        item.TeamBData.popimgUrl = new URL(`../../../../assets/images/pop/${item.TeamBData.Name}.png`, import.meta.url).href
        item.nameAlength = item.TeamAData.Name.length > 2
        item.nameBlength = item.TeamBData.Name.length > 2
        return item
      })

      // 计算第二轮晋级队伍
      calculationEast()
    }
  })
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TeamView'
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
