<template>
  <div class="team_container">
    <div class="team_8">
      <div class="team_8_4">
        <template v-for="(item, key) in teamList" :key="key">
          <div class="team_8_4_left" v-if="key == 0">
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
          <div class="team_8_4_right" v-if="key == 1">
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
          <div class="team_8_4_left" v-if="key == 2">
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
          <div class="team_8_4_right" v-if="key == 3">
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
        <div class="team_4_2" v-for="(item, key) in secondEastTeam" :key="key">
          <div class="team_item">
            <img class="team_logo" :src="item.TeamAData.imgUrl" alt="" v-if="item.TeamAData" />
            <img class="team_logo" src="@assets/images/card/doong-kong.png" alt="" v-else />
            <div class="team_name">
              <span v-if="item.TeamAData" :class="{ special: item.TeamAData.namelength }"
                >{{ item.TeamAData.Name }}
                <span> {{ Number(item.ScoreA) }}</span>
              </span>
              <span class="text" v-else>?</span>
            </div>
          </div>
          <div class="team_item">
            <img class="team_logo" :src="item.TeamBData.imgUrl" alt="" v-if="item.TeamBData" />
            <img class="team_logo" src="@assets/images/card/doong-kong.png" alt="" v-else />
            <div class="team_name">
              <span v-if="item.TeamBData" :class="{ special: item.TeamBData.namelength }">
                {{ item.TeamBData.Name }}
                <span>
                  {{ Number(item.ScoreB) }}
                </span></span
              >
              <span class="text" v-else>?</span>
            </div>
          </div>
        </div>
      </div>
      <div class="team_2_block">
        <div class="line_l"></div>
        <div class="team_4_2">
          <div class="team_item">
            <img class="team_logo" :src="thirdEastTeam.TeamAData.imgUrl" alt="" v-if="thirdEastTeam.TeamAData" />
            <img class="team_logo" src="@assets/images/card/doong-kong.png" alt="" v-else />
            <div class="team_name">
              <span v-if="thirdEastTeam.TeamAData" :class="{ special: thirdEastTeam.TeamAData.namelength }"
                >{{ thirdEastTeam.TeamAData.Name }}
                <span> {{ Number(thirdEastTeam.ScoreA) }}</span>
              </span>
              <span class="text" v-else>?</span>
            </div>
          </div>
          <div class="team_item">
            <img class="team_logo" :src="thirdEastTeam.TeamBData.imgUrl" alt="" v-if="thirdEastTeam.TeamBData" />
            <img class="team_logo" src="@assets/images/card/doong-kong.png" alt="" v-else />
            <div class="team_name">
              <span v-if="thirdEastTeam.TeamBData" :class="{ special: thirdEastTeam.TeamBData.namelength }"
                >{{ thirdEastTeam.TeamBData.Name }} <span> {{ Number(thirdEastTeam.ScoreB) }}</span></span
              >
              <span class="text" v-else>?</span>
            </div>
          </div>
        </div>
        <div class="line_r"></div>
      </div>
      <div class="team_2_inline">
        <div class="team_l">
          <img class="team_logo" :src="FinalsTeam.TeamAData.imgUrl" alt="" v-if="FinalsTeam.TeamAData" />
          <img class="team_logo" src="@assets/images/card/xi-kong.png" alt="" v-else />
        </div>
        <div class="team_2_content">
          <div class="team_2_content_item">
            <span v-if="FinalsTeam.TeamAData"
              >{{ FinalsTeam.TeamAData.Name }} <span>{{ Number(FinalsTeam.ScoreA) }}</span></span
            >
            <span class="text" v-else>?</span>
          </div>
          <div class="trophy">
            <img src="@assets/images/jiangbei.png" alt="" />
          </div>
          <div class="team_2_content_item">
            <span v-if="FinalsTeam.TeamBData" class="two-right"
              >{{ FinalsTeam.TeamBData.Name }}<span> {{ Number(FinalsTeam.ScoreB) }}</span></span
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
        <div class="team_4_2">
          <div class="team_item">
            <img class="team_logo" :src="thirdWestTeam.TeamAData.imgUrl" alt="" v-if="thirdWestTeam.TeamAData" />
            <img class="team_logo" src="@assets/images/card/doong-kong.png" alt="" v-else />
            <div class="team_name">
              <span v-if="thirdWestTeam.TeamAData" :class="{ special: thirdWestTeam.TeamAData.namelength }"
                >{{ thirdWestTeam.TeamAData.Name }}
                <span> {{ Number(thirdWestTeam.ScoreA) }}</span>
              </span>
              <span class="text" v-else>?</span>
            </div>
          </div>
          <div class="team_item">
            <img class="team_logo" :src="thirdWestTeam.TeamBData.imgUrl" alt="" v-if="thirdWestTeam.TeamBData" />
            <img class="team_logo" src="@assets/images/card/doong-kong.png" alt="" v-else />
            <div class="team_name">
              <span v-if="thirdWestTeam.TeamBData" :class="{ special: thirdWestTeam.TeamBData.namelength }"
                >{{ thirdWestTeam.TeamBData.Name }}
                <span>{{ Number(thirdWestTeam.ScoreB) }}</span>
              </span>
              <span class="text" v-else>?</span>
            </div>
          </div>
        </div>
        <div class="line_r"></div>
      </div>
      <div class="team_4">
        <div class="team_4_2" v-for="(item, key) in secondWestTeam" :key="key">
          <div class="team_item">
            <img class="team_logo" :src="item.TeamAData.imgUrl" alt="" v-if="item.TeamAData" />
            <img class="team_logo" src="@assets/images/card/doong-kong.png" alt="" v-else />
            <div class="team_name">
              <span v-if="item.TeamAData" :class="{ special: item.TeamAData.namelength }"
                >{{ item.TeamAData.Name }}
                <span>{{ Number(item.ScoreA) }}</span>
              </span>
              <span class="text" v-else>?</span>
            </div>
          </div>
          <div class="team_item">
            <img class="team_logo" :src="item.TeamBData.imgUrl" alt="" v-if="item.TeamBData" />
            <img class="team_logo" src="@assets/images/card/doong-kong.png" alt="" v-else />
            <div class="team_name">
              <span v-if="item.TeamBData" :class="{ special: item.TeamBData.namelength }"
                >{{ item.TeamBData.Name }}
                <span>{{ Number(item.ScoreB) }}</span>
              </span>
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
          <div class="team_8_4_left" v-if="key == 4">
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
          <div class="team_8_4_right" v-if="key == 5">
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
          <div class="team_8_4_left" v-if="key == 6">
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
          <div class="team_8_4_right" v-if="key == 7">
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
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getUserGuess } from '@apis'

const teamList = ref([]) // 战队

const secondEastTeam = ref([]) // 东部8强队伍
const secondWestTeam = ref([]) // 西部8强队伍

const thirdEastTeam = ref({ ScoreA: 0, ScoreB: 0, TeamAData: null, TeamBData: null, Top: 4 }) // 东部4强队伍
const thirdWestTeam = ref({ ScoreA: 0, ScoreB: 0, TeamAData: null, TeamBData: null, Top: 4 }) // 西部晋级第三轮队伍

const FinalsTeam = ref({ ScoreA: 0, ScoreB: 0, TeamAData: null, TeamBData: null, Top: 2 }) // 总决赛队伍

// 获取预测数据
const feactUserGuess = (isNew = false) => {
  secondEastTeam.value = []
  secondWestTeam.value = []
  thirdEastTeam.value = { ScoreA: null, ScoreB: null, TeamAData: null, TeamBData: null, Top: 4 }
  thirdWestTeam.value = { ScoreA: null, ScoreB: null, TeamAData: null, TeamBData: null, Top: 4 }
  FinalsTeam.value = { ScoreA: null, ScoreB: null, TeamAData: null, TeamBData: null, Top: 2 }

  getUserGuess().then(({ data }) => {
    setData(data.Data.Games, true)

  })
}

const setData = (data: { map: (arg0: (item: any) => any) => never[] }, initial) => {
  teamList.value = data.map((item: any, index: number) => {
    item.TeamAData.imgUrl = new URL(`../../../assets/images/card/${item.TeamAData.Name}.png`, import.meta.url).href
    item.TeamBData.imgUrl = new URL(`../../../assets/images/card/${item.TeamBData.Name}.png`, import.meta.url).href
    item.TeamAData.popimgUrl = new URL(`../../../assets/images/pop/${item.TeamAData.Name}.png`, import.meta.url).href
    item.TeamBData.popimgUrl = new URL(`../../../assets/images/pop/${item.TeamBData.Name}.png`, import.meta.url).href
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

  // 回显数据
  for (let i = 0; i < teamList.value.length; i++) {
    let item = teamList.value[i]

    if (item.Top != 16) {
      item.TeamAData.namelength = item.TeamAData.Name.length > 2
      item.TeamBData.namelength = item.TeamBData.Name.length > 2
      item.TeamAData.imgUrl = new URL(`../../../assets/images/card/842/${item.TeamAData.Name}.png`, import.meta.url).href
      item.TeamBData.imgUrl = new URL(`../../../assets/images/card/842/${item.TeamBData.Name}.png`, import.meta.url).href
    }
    // 东部8强
    if (item.Type == 1 && item.Top == 8) {
      secondEastTeam.value.push(item)
    }
    // 西部8强
    if (item.Type == 2 && item.Top == 8) {
      secondWestTeam.value.push(item)
    }
    // 东部4强
    if (item.Type == 1 && item.Top == 4) {
      thirdEastTeam.value = item
    }
    // 西部4强
    if (item.Type == 2 && item.Top == 4) {
      thirdWestTeam.value = item
    }
    // 决赛
    if (item.Top == 2) {
      FinalsTeam.value = item
    }
  }

  // 原始空数据
  if (!secondEastTeam.value.length) {
    secondEastTeam.value = [
      { ScoreA: null, ScoreB: null, TeamAData: null, TeamBData: null, Top: 8, nameAlength: false, nameBlength: false },
      { ScoreA: null, ScoreB: null, TeamAData: null, TeamBData: null, Top: 8, nameAlength: false, nameBlength: false }
    ]
  }
  if (!secondWestTeam.value.length) {
    secondWestTeam.value = [
      { ScoreA: null, ScoreB: null, TeamAData: null, TeamBData: null, Top: 8, nameAlength: false, nameBlength: false },
      { ScoreA: null, ScoreB: null, TeamAData: null, TeamBData: null, Top: 8, nameAlength: false, nameBlength: false }
    ]
  }
}

// 判断是是否对象
const isObject = (obj: null) => {
  return obj !== null && typeof obj === 'object'
}

onMounted(() => {
  feactUserGuess()
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
