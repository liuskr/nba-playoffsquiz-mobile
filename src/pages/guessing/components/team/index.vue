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
              <span v-if="item.TeamAData" :class="{ special: item.TeamAData.namelength }">{{ item.TeamAData.Name }} {{ Number(item.ScoreA) }}</span>
              <span class="text" v-else>?</span>
            </div>
          </div>
          <div class="team_item">
            <img class="team_logo" :src="item.TeamBData.imgUrl" alt="" v-if="item.TeamBData" />
            <img class="team_logo" src="@assets/images/card/doong-kong.png" alt="" v-else />
            <div class="team_name">
              <span v-if="item.TeamBData" :class="{ special: item.TeamBData.namelength }">{{ item.TeamBData.Name }} {{ Number(item.ScoreB) }}</span>
              <span class="text" v-else>?</span>
            </div>
          </div>
        </div>
      </div>
      <div class="team_2_block">
        <div class="line_l"></div>
        <div class="team_4_2" @click="showPopup(thirdEastTeam)">
          <div class="team_item">
            <img class="team_logo" :src="thirdEastTeam.TeamAData.imgUrl" alt="" v-if="thirdEastTeam.TeamAData" />
            <img class="team_logo" src="@assets/images/card/doong-kong.png" alt="" v-else />
            <div class="team_name">
              <span v-if="thirdEastTeam.TeamAData" :class="{ special: thirdEastTeam.TeamAData.namelength }"
                >{{ thirdEastTeam.TeamAData.Name }} {{ Number(thirdEastTeam.ScoreA) }}</span
              >
              <span class="text" v-else>?</span>
            </div>
          </div>
          <div class="team_item">
            <img class="team_logo" :src="thirdEastTeam.TeamBData.imgUrl" alt="" v-if="thirdEastTeam.TeamBData" />
            <img class="team_logo" src="@assets/images/card/doong-kong.png" alt="" v-else />
            <div class="team_name">
              <span v-if="thirdEastTeam.TeamBData" :class="{ special: thirdEastTeam.TeamBData.namelength }"
                >{{ thirdEastTeam.TeamBData.Name }} {{ Number(thirdEastTeam.ScoreB) }}</span
              >
              <span class="text" v-else>?</span>
            </div>
          </div>
        </div>
        <div class="line_r"></div>
      </div>
      <div class="team_2_inline" @click="showPopup(FinalsTeam)">
        <div class="team_l">
          <img class="team_logo" :src="FinalsTeam.TeamAData.imgUrl" alt="" v-if="FinalsTeam.TeamAData" />
          <img class="team_logo" src="@assets/images/card/xi-kong.png" alt="" v-else />
        </div>
        <div class="team_2_content">
          <div class="team_2_content_item">
            <span v-if="FinalsTeam.TeamAData" :class="{ special: FinalsTeam.TeamAData.namelength }"
              >{{ FinalsTeam.TeamAData.Name }} {{ Number(FinalsTeam.ScoreA) }}</span
            >
            <span class="text" v-else>?</span>
          </div>
          <div class="trophy">
            <img src="@assets/images/jiangbei.png" alt="" />
          </div>
          <div class="team_2_content_item">
            <span v-if="FinalsTeam.TeamBData" :class="{ special: FinalsTeam.TeamBData.namelength }"
              >{{ FinalsTeam.TeamBData.Name }} {{ Number(FinalsTeam.ScoreB) }}</span
            >
            <span class="text" v-else>?</span>
          </div>
        </div>
        <div class="team_r">
          <img class="team_logo" :src="FinalsTeam.TeamBData.imgUrl" alt="" v-if="FinalsTeam.TeamBData" />
          <img class="team_logo" src="@assets/images/card/2-kong.png" alt="" v-else />
        </div>
      </div>
      <div class="team_2_block team_2_block_bottom">
        <div class="line_l"></div>
        <div class="team_4_2" @click="showPopup(thirdWestTeam)">
          <div class="team_item">
            <img class="team_logo" :src="thirdWestTeam.TeamAData.imgUrl" alt="" v-if="thirdWestTeam.TeamAData" />
            <img class="team_logo" src="@assets/images/card/doong-kong.png" alt="" v-else />
            <div class="team_name">
              <span v-if="thirdWestTeam.TeamAData" :class="{ special: thirdWestTeam.TeamAData.namelength }"
                >{{ thirdWestTeam.TeamAData.Name }} {{ Number(thirdWestTeam.ScoreA) }}</span
              >
              <span class="text" v-else>?</span>
            </div>
          </div>
          <div class="team_item">
            <img class="team_logo" :src="thirdWestTeam.TeamBData.imgUrl" alt="" v-if="thirdWestTeam.TeamBData" />
            <img class="team_logo" src="@assets/images/card/doong-kong.png" alt="" v-else />
            <div class="team_name">
              <span v-if="thirdWestTeam.TeamBData" :class="{ special: thirdWestTeam.TeamBData.namelength }"
                >{{ thirdWestTeam.TeamBData.Name }} {{ Number(thirdWestTeam.ScoreB) }}</span
              >
              <span class="text" v-else>?</span>
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
              <span v-if="item.TeamAData" :class="{ special: item.TeamAData.namelength }">{{ item.TeamAData.Name }} {{ Number(item.ScoreA) }}</span>
              <span class="text" v-else>?</span>
            </div>
          </div>
          <div class="team_item">
            <img class="team_logo" :src="item.TeamBData.imgUrl" alt="" v-if="item.TeamBData" />
            <img class="team_logo" src="@assets/images/card/doong-kong.png" alt="" v-else />
            <div class="team_name">
              <span v-if="item.TeamBData" :class="{ special: item.TeamBData.namelength }">{{ item.TeamBData.Name }} {{ Number(item.ScoreB) }}</span>
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
import { ref, onMounted } from 'vue'
import { setUserGuess, getUserGuess } from '@apis'
import { getSignData } from '@utils/crypto'
import { Toast } from 'vant'
import PopupView from '../popup/index.vue'

const teamList = ref([]) // 战队
const showPop = ref(false)
const popInfo = ref({})

const secondEastTeam = ref([]) // 东部晋级第二轮队伍
const secondWestTeam = ref([]) // 西部晋级第二轮队伍

const thirdEastTeam = ref({ ScoreA: null, ScoreB: null, TeamAData: null, TeamBData: null, dataType: 'third' }) // 东部晋级第三轮队伍
const thirdWestTeam = ref({ ScoreA: null, ScoreB: null, TeamAData: null, TeamBData: null, dataType: 'third' }) // 西部晋级第三轮队伍

const FinalsTeam = ref({ ScoreA: null, ScoreB: null, TeamAData: null, TeamBData: null, dataType: 'finals' }) // 总决赛队伍

// 显示预测输入弹框
const showPopup = (item: {}) => {
  if (item.State == 2 || !item.TeamAData || !item.TeamBData) {
    return
  }
  popInfo.value = item
  showPop.value = true
}

// 关闭弹框 更新数据
const close = (ScoreA: null | undefined, ScoreB: null) => {
  console.log(popInfo.value)
  if (ScoreA !== undefined) {
    // 第一轮
    if (!popInfo.value.dataType) {
      teamList.value.forEach((item) => {
        if (item.ID == popInfo.value.ID) {
          item.ScoreA = ScoreA
          item.ScoreB = ScoreB
          return item
        }
      })

      calculationEast()
    }
    // 第二轮
    if (popInfo.value.dataType == 'second') {
      secondEastTeam.value.forEach((item) => {
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

      calculationthird()
    }

    // 第三轮
    if (popInfo.value.dataType == 'third') {
      if (thirdEastTeam.value.TeamAData && thirdEastTeam.value.TeamAData.Name == popInfo.value.TeamAData.Name) {
        thirdEastTeam.value.ScoreA = ScoreA
        thirdEastTeam.value.ScoreB = ScoreB
      }
      if (thirdWestTeam.value.TeamAData && thirdWestTeam.value.TeamAData.Name == popInfo.value.TeamAData.Name) {
        thirdWestTeam.value.ScoreA = ScoreA
        thirdWestTeam.value.ScoreB = ScoreB
      }

      calculationLast()
    }

    // 总决赛
    if (popInfo.value.dataType == 'finals') {
      if (FinalsTeam.value.TeamAData && FinalsTeam.value.TeamAData.Name == popInfo.value.TeamAData.Name) {
        FinalsTeam.value.ScoreA = ScoreA
        FinalsTeam.value.ScoreB = ScoreB
      }
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
    const obj = { ScoreA: null, ScoreB: null, TeamAData: null, TeamBData: null, dataType: 'second', nameAlength: false, nameBlength: false }
    element.map((item, key) => {
      let data = null
      if (Number(item.ScoreA) >= 4) {
        data = JSON.parse(JSON.stringify(item.TeamAData))
      }
      if (Number(item.ScoreB) >= 4) {
        data = JSON.parse(JSON.stringify(item.TeamBData))
      }
      if (data && data.imgUrl) {
        data.imgUrl = new URL(`../../../../assets/images/card/842/${data.Name}.png`, import.meta.url).href
        data.namelength = data.Name.length > 2
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
}

// 计算晋级第三轮队伍
const calculationthird = () => {
  // thirdEastTeam.value = { ScoreA: null, ScoreB: null, TeamAData: null, TeamBData: null, dataType: 'third' }
  // thirdWestTeam.value = { ScoreA: null, ScoreB: null, TeamAData: null, TeamBData: null, dataType: 'third' }

  for (let i = 0; i < secondEastTeam.value.length; i++) {
    const item = secondEastTeam.value[i]
    let data = null
    if (Number(item.ScoreA) >= 4) {
      data = JSON.parse(JSON.stringify(item.TeamAData))
    }
    if (Number(item.ScoreB) >= 4) {
      data = JSON.parse(JSON.stringify(item.TeamBData))
    }
    if (data && data.imgUrl) {
      data.imgUrl = new URL(`../../../../assets/images/card/842/${data.Name}.png`, import.meta.url).href
      data.nameAlength = data.Name.length > 2
    }

    if (i == 0) {
      thirdEastTeam.value.TeamAData = data
    } else {
      thirdEastTeam.value.TeamBData = data
    }
  }

  for (let i = 0; i < secondWestTeam.value.length; i++) {
    const item = secondWestTeam.value[i]
    let data = null
    if (Number(item.ScoreA) >= 4) {
      data = item.TeamAData
    }
    if (Number(item.ScoreB) >= 4) {
      data = item.TeamBData
    }

    if (i == 0) {
      thirdWestTeam.value.TeamAData = data
    } else {
      thirdWestTeam.value.TeamBData = data
    }
  }
}

// 计算总决赛队伍
const calculationLast = () => {
  console.log(FinalsTeam.value)
  // FinalsTeam.value = { ScoreA: null, ScoreB: null, TeamAData: null, TeamBData: null, dataType: 'finals' }
  if (Number(thirdEastTeam.value.ScoreA) >= 4) {
    FinalsTeam.value.TeamAData = thirdEastTeam.value.TeamAData
    FinalsTeam.value.TeamAData.imgUrl = new URL(`../../../../assets/images/card/842/${FinalsTeam.value.TeamAData.Name}.png`, import.meta.url).href
    FinalsTeam.value.TeamAData.namelength = FinalsTeam.value.TeamAData.Name.length > 2
  }
  if (Number(thirdEastTeam.value.ScoreB) >= 4) {
    FinalsTeam.value.TeamAData = thirdEastTeam.value.TeamBData
    FinalsTeam.value.TeamAData.imgUrl = new URL(`../../../../assets/images/card/842/${FinalsTeam.value.TeamAData.Name}.png`, import.meta.url).href
    FinalsTeam.value.TeamAData.namelength = FinalsTeam.value.TeamAData.Name.length > 2
  }
  if (Number(thirdWestTeam.value.ScoreA) >= 4) {
    FinalsTeam.value.TeamBData = thirdWestTeam.value.TeamAData
    FinalsTeam.value.TeamBData.imgUrl = new URL(`../../../../assets/images/card/842/${FinalsTeam.value.TeamBData.Name}.png`, import.meta.url).href
    FinalsTeam.value.TeamBData.namelength = FinalsTeam.value.TeamBData.Name.length > 2
  }
  if (Number(thirdWestTeam.value.ScoreB) >= 4) {
    FinalsTeam.value.TeamBData = thirdWestTeam.value.TeamBData
    FinalsTeam.value.TeamBData.imgUrl = new URL(`../../../../assets/images/card/842/${FinalsTeam.value.TeamBData.Name}.png`, import.meta.url).href
    FinalsTeam.value.TeamBData.namelength = FinalsTeam.value.TeamBData.Name.length > 2
  }
  console.log(FinalsTeam.value)
}

defineExpose({
  // 提交比分
  submit() {
    const GuessData: Array<any> = []
    // console.log('东西部', teamList.value)
    // console.log('东部2', secondEastTeam.value)
    // console.log('西部2', secondWestTeam.value)
    // console.log('东部3', thirdEastTeam.value)
    // console.log('西部3', thirdWestTeam.value)
    // console.log('总决赛', FinalsTeam.value)

    // 东西部 16强
    teamList.value.map((item) => {
      if (item.TeamAData) {
        GuessData.push({
          TeamA: item.TeamAData.ID,
          TeamB: item.TeamBData.ID,
          ScoreA: item.ScoreA,
          ScoreB: item.ScoreB,
          Top: 16,
          Type: item.Type
        })
      }
    })
    // 东部 8强
    secondEastTeam.value.map((item) => {
      if (item.TeamAData) {
        GuessData.push({
          TeamA: item.TeamAData.ID,
          TeamB: item.TeamBData.ID,
          ScoreA: item.ScoreA,
          ScoreB: item.ScoreB,
          Top: 8,
          Type: 1
        })
      }
    })
    // 西部 8强
    secondWestTeam.value.map((item) => {
      if (item.TeamAData) {
        GuessData.push({
          TeamA: item.TeamAData.ID,
          TeamB: item.TeamBData.ID,
          ScoreA: item.ScoreA,
          ScoreB: item.ScoreB,
          Top: 8,
          Type: 2
        })
      }
    })
    // 东部 4强
    if (thirdEastTeam.value.TeamAData) {
      GuessData.push({
        TeamA: thirdEastTeam.value.TeamAData.ID,
        TeamB: thirdEastTeam.value.TeamBData.ID,
        ScoreA: thirdEastTeam.value.ScoreA,
        ScoreB: thirdEastTeam.value.ScoreB,
        Top: 4,
        Type: 1
      })
    }
    // 西部 4强
    if (thirdWestTeam.value.TeamAData) {
      GuessData.push({
        TeamA: thirdWestTeam.value.TeamAData.ID,
        TeamB: thirdWestTeam.value.TeamBData.ID,
        ScoreA: thirdWestTeam.value.ScoreA,
        ScoreB: thirdWestTeam.value.ScoreB,
        Top: 4,
        Type: 2
      })
    }
    // 决赛
    if (FinalsTeam.value.TeamAData) {
      GuessData.push({
        TeamA: FinalsTeam.value.TeamAData.ID,
        TeamB: FinalsTeam.value.TeamBData.ID,
        ScoreA: FinalsTeam.value.ScoreA,
        ScoreB: FinalsTeam.value.ScoreB,
        Top: 2,
        Type: 2
      })
    }

    if (GuessData.length > 16) {
      Toast('请预测完成')
      return
    }

    localStorage.setItem('sign', getSignData(JSON.stringify({ GuessData })))
    setUserGuess({
      GuessData
    }).then((res) => {
      Toast.success('提交成功')
    })
  }
})

const setData = (data: { map: (arg0: (item: any) => any) => never[] }, initial) => {
  teamList.value = data.map((item: any, index: number) => {
    item.TeamAData.imgUrl = new URL(`../../../../assets/images/card/${item.TeamAData.Name}.png`, import.meta.url).href
    item.TeamBData.imgUrl = new URL(`../../../../assets/images/card/${item.TeamBData.Name}.png`, import.meta.url).href
    item.TeamAData.popimgUrl = new URL(`../../../../assets/images/pop/${item.TeamAData.Name}.png`, import.meta.url).href
    item.TeamBData.popimgUrl = new URL(`../../../../assets/images/pop/${item.TeamBData.Name}.png`, import.meta.url).href
    // 初始化未出结果比分为0
    if (initial) {
      item.ScoreA = item.State !== 1 ? item.ScoreA : 0
      item.ScoreB = item.State !== 1 ? item.ScoreB : 0
    } else {
      item.ID = index + 1
    }
    item.nameAlength = item.TeamAData.Name.length > 2
    item.nameBlength = item.TeamBData.Name.length > 2
    return item
  })
}

// 判断是是否对象
const isObject = (obj: null) => {
  return obj !== null && typeof obj === 'object'
}

onMounted(() => {
  getUserGuess().then(({ data }) => {
    if (isObject(data.Data.GuessRecord)) {
      setData(data.Data.GuessRecord.GuessDetail, false)
    } else {
      setData(data.Data.Games, true)
    }
    calculationEast()

    calculationthird()

    calculationLast()
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

.special {
  padding-left: 4px;
  // padding-bottom: 12px;
  line-height: 22px;
  font-size: 26px;
}
</style>
