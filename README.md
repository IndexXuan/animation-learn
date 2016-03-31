<h1 align="center">前端动画学习</h1>

## 目录
01 - 匀速直线运动  
02 - 匀加速直线运动  
03 - 匀减速直线运动  
04 - 匀斜线运动  
05 - 抛物运动  
06 - 摆动  
07 - 正弦运动  
08 - 圆周运动, 利用CSS3的rotate  
09 - 圆周运动, 正常  
10 - 动画封装  
11 - 折线运动  
12 - 矩形环绕运动  
13 - 小球下落  
14 - 滚动  
15 - 旋转后抛出  
16 - 摩擦力  

## 变量命名解释
  p: progress表示时间进度  
  distance: 距离

## 动画的要素分析
  动画时长: T  
  动画进程: p  
  easing  : f(p)
  动画生命周期: 进行中，结束，onStart, onProgress, onFinished  
  动画方程: (x, y) => G(e)  

## CSS3动画
  transition动画  
    
　animation  
    keyframe's name  
    duration  
    timing function  
    delay  
    iteration count  
    direction  

## 动画组合
  1. 回调函数
  2. 动画队列
  3. webAnimationEnd, webkitTransitionEnd(区别: 执行次数，animation就一次回调)
  4. animation-fill-mode

## SVG动画
  http://www.zhangxinxu.com/wordpress/2014/08/so-powerful-svg-smil-animation/

## 性能
  http://melonh.com/sharing/slides.html?file=high_performance_animation#/

## GPU Layers
  translate3d(0, 0, 0)  
  will-change property(no ie, chrome36+)

## Repaints & Layout
　多用transform, 少用top, left ... 

## update
  尽量使用requestAnimationFrame, 少用setTimeout, setInterval

## 动画相关框架
  jQuery, velocity, animo.js, Snap.js

