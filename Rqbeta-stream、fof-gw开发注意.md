# [`Rqbeta-stream`](http://git.ricequant.com/projects/OT/repos/rqbeta-stream/browse)

> - 委外是从 2019/05 左右开始的项目，经历过界面重做、权限重做...等破事，原计划半年内快速结束的项目已经拖到了两年；
> - 项目初始配置人员只剩下*后端开发[陈泓泽]*
> - ### 考虑到成本问题，打算放弃委外项目维护期，因此 2020/03/05 后的所有需求都会说服招行划进维护期[<font color=red>进行中</font>]
> - [`Git`](http://git.ricequant.com/projects/OT/repos/rqbeta-stream/browse)
> - [`米筐ST`](https://192.168.10.26/) 目前后端没有继续进行维护，页面由假数据填充

---

---

## 技术难点[坑]

---

### 1. 委外系统会保存用户的操作

具体包括:

- 除了权限管理外的所有表格都会保存用户进行的<font color=red>表格列展示勾选、表格列宽度伸缩、翻页记录</font>
- <font color=red>仓位分析、绩效分析、持仓记录、持仓变动、</font>初始化向后端请求用户在当前页面查看基金/分析 ID，然后请求 ID 对应内容

需要注意:

1. 用户与操作记录一一对应
2. 后端数据库保存记录格式为 json，后端不检验数据结构，后端根据 user_id 以及 page_key 获取保存记录
3. 后端只提供保存数据的空间与 api，前端根据应用情况变更数据结构:<br/>
   1. ### 表格:
   - request:
     - page*key: `{this.$route.name}\_table*${this.title}` <font color=green>// 路由名称+“_table_”+表格标题</font>
   - response:
     - columns[Array] <font color=green>// 展示列 prop 数组</font>
     - header[Array] <font color=green>// 标题拉伸状态</font>
       - prop <font color=green>// 列 prop</font>
       - width <font color=green>// 宽度</font>
   1. ### 分析页面:
   - request:
     - page_key: `static_record` <font color=green>// 静态变量、无保存表、分散在个页面</font>
   - response:
     - option[Object] <font color=green>// 针对各个页面的请求参数</font>

### 2. 数据一次性请求

> 1. 需求中明确项目数据量是很少的，最多的组合概览不过 100 条记录，因此前端会一次性请求所有纪录，翻页、搜索、排序都由前端实现，因此若是提出新需求需要处理大量数据都应该驳回

---

---

## 驻场开发注意

---

1. 目前前端驻场开发环境是[`华润金融大厦18楼`](https://maps.apple.com/?address=%E4%B8%AD%E5%9B%BD%E5%B9%BF%E4%B8%9C%E7%9C%81%E6%B7%B1%E5%9C%B3%E5%B8%82%E5%8D%97%E5%B1%B1%E5%8C%BA%E7%A7%91%E8%8B%91%E5%8D%97%E8%B7%AF2700%E5%8F%B7&auid=1118368854794493&ll=22.515173,113.945497&lsp=57879&q=%E5%8D%8E%E6%B6%A6%E9%87%91%E8%9E%8D%E5%A4%A7%E5%8E%A6&_ext=ChkKBAgEEAQKBAgFEAMKBQgGEN8BCgQIGxADEiQpn8okr5OBNkAx2OJZIsN7XEA538VAEjGGNkBB0thY6UJ9XEA%3D),需要携带门禁卡前往
2. 招行内部码云保存 Rqbeta-stream 项目代码，他们也会对项目进行开发，招行内部项目与公司内部项目不保持一致
3. 招行内部实行断网，因此需要在内部机器上进行开发，将代码推送到 master 分支后，招行内部流水线会自动更新 st 环境
4. 更新 uat、上线都需要通知招行对接人员进行合并代码
5. 每次开发后最好也更新公司内的项目，防止招行员工后续开发破坏项目没法甩锅

---

---

---

<br /> 
<br />
<br /> 
<br />
<br /> 
<br />

# [`FOF-GW`](http://git.ricequant.com/projects/OT/repos/fof-gw/browse)

> - 目前的迭代是对权限管理进行开发已经部署到对方 uat 进行测试，考虑到长城方的效率，或许在离职前无法完成上线
> - 长城目前还处于开发阶段，还未进入到对方员工的试用阶段
> - 后续后端维护由*[吴小翔]*负责

<br /> 
<br />

> - [`Git`](http://git.ricequant.com/projects/OT/repos/fof-gw/browse)
> - [`米筐ST`](http://ricequant-office.ricequant.com:8085/) -- 对应 dev 分支
> - [`米筐UAT`](http://ricequant-office.ricequant.com:8086/) -- 对应 master 分支
> - [`长城UAT`](http://192.168.10.11:9088/yxzx/fundFilter) -- 通知运维以 master 分支更新
> - [`长城生产`](https://lcv2.cgws.com/yxzx/auditInformationCenter)

---

---

## 技术难点[坑]

---

### 1. 权限管理

> 权限管理具有增加、删除、修改、查找权限功能，权限管理中管理的权限是整个系统中所有权限本身，若是删除了某一个权限，那么含有该权限的角色也会删除掉对应权限

1.  权限管理默认展示由米筐开发的基础功能；该部分预设权限无法修改、删除，但是预设部分的菜单权限可以通过移动相对位置
2.  菜单权限移动功能无法将菜单移动到与父菜单同级的菜单，因为大部分三级菜单中都是相当于页面页面中的一个按钮，无法通过简单配置来所属父级菜单，并且原本的父级菜单中糅合了各个子菜单复用的代码
3.   除了预设权限外，用户可以新增、修改、删除自定义权限，但是对自定义权限的增删改都是需要前端来完成实现，例如：长城增加了一个基金分析的一/二菜单，此时左侧会出现对应菜单，但是里面的内容需要前端去完善；三级菜单以及按钮权限因为不可配置，所以只能修改代码来实现变动；<font color=red>米筐只提供管理自定义权限纪录的功能，修改自定义权限带来的变动由长城自己开发</font>

## 代码仓库相关

---

1. 长城代码由米筐保管，目前为止长城并没有向我们索取过长城的前端代码，每一次更新需要的都是编译文件
