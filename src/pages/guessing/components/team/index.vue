<template>
  <div class="team_container">
    <div class="team_8">
      <div class="team_8_4">
        <template v-for="(item, key) in easternTeam" :key="key">
          <!-- <PopupView :info="item" v-if="key < 2"> -->
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
                  <span :class="{ special: item.nameBlength }"> 凯尔</span>
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
          <!-- </PopupView> -->
        </template>
      </div>
      <div class="team_8_4">
        <template v-for="(item, key) in easternTeam" :key="key">
          <!-- <PopupView :info="item" v-if="key > 1"> -->
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
          <!-- </PopupView> -->
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
        <div class="team_4_2">
          <div class="team_item">
            <img class="team_logo" src="../../../../assets/images/t_1.png" alt="" />
            <div class="team_name">
              <span class="text">热火</span>
              <span>4</span>
            </div>
          </div>
          <div class="team_item">
            <img class="team_logo" src="../../../../assets/images/t_1.png" alt="" />
            <div class="team_name">
              <span class="text">热火</span>
              <span>4</span>
            </div>
          </div>
        </div>
        <div class="team_4_2">
          <div class="team_item">
            <img class="team_logo" src="../../../../assets/images/t_1.png" alt="" />
            <div class="team_name">
              <span class="text">热火</span>
              <span>4</span>
            </div>
          </div>
          <div class="team_item">
            <img class="team_logo" src="../../../../assets/images/t_1.png" alt="" />
            <div class="team_name">
              <span class="text">热火</span>
              <span>4</span>
            </div>
          </div>
        </div>
      </div>
      <div class="team_2_block">
        <div class="line_l"></div>
        <div class="team_4_2">
          <div class="team_item">
            <img class="team_logo" src="../../../../assets/images/t_1.png" alt="" />
            <div class="team_name">
              <span class="text">热火</span>
              <span>4</span>
            </div>
          </div>
          <div class="team_item">
            <img class="team_logo" src="../../../../assets/images/t_1.png" alt="" />
            <div class="team_name">
              <span class="text">热火</span>
              <span>4</span>
            </div>
          </div>
        </div>
        <div class="line_r"></div>
      </div>
      <div class="team_2_inline">
        <div class="team_l">
          <img src="../../../../assets/images/t_1.png" alt="" />
        </div>
        <div class="team_2_content">
          <div class="team_2_content_item">
            <span class="name">76人</span>
            <span>4</span>
          </div>
          <div class="trophy">
            <img src="@assets/images/jiangbei.png" alt="" />
          </div>
          <div class="team_2_content_item">
            <span class="name">勇士</span>
            <span>4</span>
          </div>
        </div>
        <div class="team_r">
          <img src="../../../../assets/images/t_5.png" alt="" />
        </div>
      </div>
      <div class="team_2_block team_2_block_bottom">
        <div class="line_l"></div>
        <div class="team_4_2">
          <div class="team_item">
            <img class="team_logo" src="../../../../assets/images/t_1.png" alt="" />
            <div class="team_name">
              <span class="text">热火</span>
              <span>4</span>
            </div>
          </div>
          <div class="team_item">
            <img class="team_logo" src="../../../../assets/images/t_1.png" alt="" />
            <div class="team_name">
              <span class="text">热火</span>
              <span>4</span>
            </div>
          </div>
        </div>
        <div class="line_r"></div>
      </div>
      <div class="team_4">
        <div class="team_4_2">
          <div class="team_item">
            <img class="team_logo" src="../../../../assets/images/t_1.png" alt="" />
            <div class="team_name">
              <span class="text">热火</span>
              <span>4</span>
            </div>
          </div>
          <div class="team_item">
            <img class="team_logo" src="../../../../assets/images/t_1.png" alt="" />
            <div class="team_name">
              <span class="text">热火</span>
              <span>4</span>
            </div>
          </div>
        </div>
        <div class="team_4_2">
          <div class="team_item">
            <img class="team_logo" src="../../../../assets/images/t_1.png" alt="" />
            <div class="team_name">
              <span class="text">热火</span>
              <span>4</span>
            </div>
          </div>
          <div class="team_item">
            <img class="team_logo" src="../../../../assets/images/t_1.png" alt="" />
            <div class="team_name">
              <span class="text">热火</span>
              <span>4</span>
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
        <template v-for="(item, key) in westernTeam" :key="key">
          <!-- <PopupView v-if="key < 2" :info="item"> -->
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
                  <span :class="{ special: item.nameBlength }"> 凯尔 </span>
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
          <!-- </PopupView> -->
        </template>
      </div>
      <div class="team_8_4">
        <slot v-for="(item, key) in westernTeam" :key="key">
          <!-- <PopupView :info="item" v-if="key > 1"> -->
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
          <!-- </PopupView> -->
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getUserGuess } from '@apis'
// import PopupView from '../popup/index.vue'
const easternTeam = ref([]) // 东部战队
const westernTeam = ref([]) // 西部战队

onMounted(() => {
  getUserGuess().then(({ data }) => {
    if (data.Data.Games.length) {
      const dataList = data.Data.Games.map((item: any) => {
        item.TeamAData.imgUrl = new URL(`../../../../assets/images/card/${item.TeamAData.Name}.png`, import.meta.url).href
        item.TeamBData.imgUrl = new URL(`../../../../assets/images/card/${item.TeamBData.Name}.png`, import.meta.url).href
        item.TeamAData.popimgUrl = new URL(`../../../../assets/images/pop/${item.TeamAData.Name}.png`, import.meta.url).href
        item.TeamBData.popimgUrl = new URL(`../../../../assets/images/pop/${item.TeamBData.Name}.png`, import.meta.url).href
        item.nameAlength = item.TeamAData.Name.length > 3
        item.nameBlength = item.TeamBData.Name.length > 3
        return item
      })
      easternTeam.value = dataList.filter((item: any) => item.Type == 1)
      westernTeam.value = dataList.filter((item: any) => item.Type == 1)
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
