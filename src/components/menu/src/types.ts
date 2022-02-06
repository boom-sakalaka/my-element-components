/*
 * @Author: GZH
 * @Date: 2022-02-06 17:00:11
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-06 17:01:06
 * @FilePath: \my-element-components\src\components\menu\src\types.ts
 * @Description:
 */
export interface MenuItem {
  // 导航的图标
  icon?: string;
  // 处理之后的图标
  i?: any;
  // 导航的名字
  name: string;
  // 导航的标识
  index: string;
  // 导航的子菜单
  children?: MenuItem[];
}
