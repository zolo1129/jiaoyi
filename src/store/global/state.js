export default {
  // 系统loading
  system_loading: false,
  // 是否存在隐患
  has_warn: 0,
  // 园区列表
  area_list: [],
  // 选中园区
  area_select: {},
  // 天气地区标识
  area_weather: '',

  // 菜单抽屉
  drawer_show: false,
  // 监控系统菜单
  aside_menu_user: [
    {
      link_text: '能耗统计与报表',
      children: [
        {
          link: 'overview',
          link_text: '今日实时能耗统计'
        },
        {
          link: 'energy',
          link_text: '历史能耗统计'
        },
        {
          link: 'energy_public',
          link_text: '公共用电设施能耗统计'
        },
        {
          link: 'energy_transformer',
          link_text: '变压器需量管理'
        },
        {
          link: 'energy_form',
          link_text: '用能报表'
        }
      ]
    },
    {
      link_text: '电力实时监控',
      children: [
        {
          link: 'switch_public',
          link_text: '公共用电设施监控'
        },
        {
          link: 'switch_proprietor',
          link_text: '业主用电设施监控'
        },
        {
          link: 'transformer',
          link_text: '变压器监控'
        }
      ]
    },
    {
      link_text: '用能预测',
      children: [
        {
          link: 'forecast_tomorrow',
          link_text: '未来24小时逐时预测'
        },
        {
          link: 'energy_tendays',
          link_text: '未来10天逐时预测'
        }
      ]
    },
    {
      link_text: '数据增值服务',
      children: [
        {
          link: 'service_distributed',
          link_text: '分布式能源管理'
        },
        {
          link: 'service_storage',
          link_text: '储能系统管理'
        },
        {
          link: 'service_conserve',
          link_text: '节能系统管理'
        }
      ]
    }
  ],
  // 超级管理员菜单
  aside_menu_super: [
    {
      link_text: '超级管理员',
      children: [
        {
          link: 'user_list',
          link_text: '账户列表'
        }
      ]
    }
  ]
}