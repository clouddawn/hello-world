<template>
  <main>
    <section>
      <div class="oneLine">
        <div class="left">
          <span class="red">*</span> 姓名
        </div>
        <div class="right">
          <input type="text" maxlength="24" placeholder="请输入" v-model.trim="form.name">
        </div>
      </div>
      <div class="oneLine" @click="certificatePicker = true">
        <div class="left">
          <span class="red">*</span> 证件类型
        </div>
        <div class="right">
          <input type="text" placeholder="请选择" readonly v-model="showCertificate">
          <img class="rightImg" src="@/assets/examples/arrowRight.png" alt="">
        </div>
      </div>
      <!--      证件类型选择-->
      <van-popup v-model="certificatePicker" round position="bottom">
        <van-picker
            show-toolbar
            :columns="certificateColumns"
            @cancel="certificatePicker = false"
            @confirm="certificateConfirm"
        />
      </van-popup>
      <div class="oneLine">
        <div class="left">
          <span class="red">*</span> 证件号码
        </div>
        <div class="right">
          <input type="text" maxlength="24" placeholder="请输入" v-model.trim="form.certificateNumber">
        </div>
      </div>
      <div class="oneLine">
        <div class="left">
          <span class="red">*</span> 性别
        </div>
        <div class="right">
          <van-radio-group v-model="form.gender" direction="horizontal">
            <van-radio name="1" checked-color="#19A0A0
">男
            </van-radio>
            <van-radio name="2" checked-color="#19A0A0
">女
            </van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="oneLine" @click="birthDatePicker = true">
        <div class="left">
          <span class="red">*</span> 出生日期
        </div>
        <div class="right">
          <input type="text" placeholder="请选择" readonly v-model="form.birthDate">
          <img class="rightImg" src="@/assets/examples/arrowRight.png" alt="">
        </div>
      </div>
      <div class="oneLine">
        <div class="left">
          <span class="red">*</span> 年龄
        </div>
        <div class="right">
          <input type="number" oninput="value = value.slice(0,3)" v-model.number="form.age" placeholder="请输入">
        </div>
      </div>
      <van-popup v-model="birthDatePicker" round position="bottom">
        <van-datetime-picker
            v-model="currentDate"
            type="date"
            title="选择年月日"
            :min-date="minDate"
            :max-date="maxDate"
            @cancel="birthDatePicker = false"
            @confirm="birthDateConfirm"
        />
      </van-popup>
      <div class="oneLine">
        <div class="left">
          <span class="red">*</span> 手机号码
        </div>
        <div class="right">
          <input type="number" oninput="value = value.slice(0,11)" v-model.number="form.phone" placeholder="请输入">
        </div>
      </div>
    </section>
    <section>
      <div class="oneLine" @click="townPicker = true">
        <div class="left">
          <span class="red">*</span> 现住址区镇
        </div>
        <div class="right">
          <input type="text" placeholder="请选择" readonly v-model="form.town">
          <img class="rightImg" src="@/assets/examples/arrowRight.png" alt="">
        </div>
      </div>
      <div class="twoLines">
        <div class="top">
          <span class="red">*</span> 现住址
        </div>
        <div class="bottom">
          <van-field
              v-model="form.address"
              rows="1"
              autosize
              type="textarea"
              placeholder="请输入"
              maxlength="120"
          />
        </div>
      </div>
      <div class="twoLines">
        <div class="top">
          <span class="red">*</span> 是否为入境人员？
        </div>
        <div class="bottom">
          <van-radio-group v-model="form.entrant" direction="horizontal">
            <van-radio name="1" checked-color="#19A0A0
">是</van-radio>
            <van-radio name="2" checked-color="#19A0A0
">否</van-radio>
          </van-radio-group>
        </div>
      </div>
      <!--      区镇选择-->
      <van-popup v-model="townPicker" round position="bottom">
        <van-picker
            show-toolbar
            :columns="townColumns"
            @cancel="townPicker = false"
            @confirm="townConfirm"
        />
      </van-popup>
    </section>
  </main>
</template>

<script src="./Form.js"></script>

<style lang="scss" scoped>
@import "./Form.scss";
</style>