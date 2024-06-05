---
slug: Ubuntu-install-Nvidia-Driver
title: Ubuntu install Nvidia Driver
date: 2024-06-05T21:55:21.800Z
excerpt: How to add Nvidia Driver for a new Linux system!
coverImage: https://imageio.forbes.com/blogs-images/jasonevangelho/files/2018/07/ubuntu-logo.jpg?height=502&width=711&fit=bounds
tags:
  - Study
  - Software problem
  - Linux OS
---
<script>
  import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";
</script>

# ubuntu系统安装Nvidia驱动

ubuntu系统自带的驱动是Nouveau驱动，因为老黄这货不合作才搞了这么一个东西。

看看人家隔壁的AMD，装个驱动就没这么多问题！

话不多说开始安装！

---

有好几种方式安装nvidia驱动，介绍比较常见的

+ 使用ubuntu自带的附加程序
+ Nvidia官网下载
+ 终端手动操作

---

## 下载驱动

这里我们采用命令行进行操作，只要跟着步骤就应该没有问题。

首先，我的电脑ubuntu的版本是22.04.01，其他版本应该大概或许是没有问题。如果有问题我们再解决。（如果大佬们有什么意见请留言，我也是从小白开始学习可能存在一些问题）

1. 下载驱动

<CodeBlock lang="bash">
sudo apt-get install nvidia-driver
</CodeBlock>

## 驱动突然不好使

在安装完驱动之后发现有一天我的驱动突然就不工作了，于是更新了一下，可以按照下面的解决方法。

+ 问题：驱动还在，就是不工作，默认开启Nouven

<CodeBlock lang="bash">
#查询驱动状态
nvidia-smi
</CodeBlock>

如果查不到驱动状态，那就开始寻找原因。例如出现以下的报错：

<CodeBlock lang="bash">
(base) username:~$ nvidia-smi
NVIDIA-SMI has failed because it couldn't communicate with the NVIDIA driver. Make sure that the latest NVIDIA driver is installed and running.
</CodeBlock>

提示说错误消息表明NVIDIA驱动未正确加载或未正常运行。

首先检查模块状态：

<CodeBlock lang="bash">
lsmod | grep nvidia
</CodeBlock>

结果如下：

<CodeBlock lang="bash">
(base) username:~$ lsmod | grep nvidia
i2c_nvidia_gpu         16384  0
i2c_ccgx_ucsi          16384  1 i2c_nvidia_gpu
</CodeBlock>

这边显示我们的模块已经加载过了，毕竟之前安装过，还可以正常使用。所以根据之前的nvidia-smi给出的信息我们应该是通信的问题。当然如果没有信息，那首先手动加载一下：

<CodeBlock lang="bash">
sudo modprobe nvidia
</CodeBlock>

继续说通信的问题，先查询一下日志：

<CodeBlock lang="bash">
journalctl -xe | grep nvidia
</CodeBlock>

查询日志发现，nvidia-settings could not find the registry key file，NVIDIA设置工具无法找到必要的注册表关键文件，同时日志中还包含了一些依赖问题。

检查一下GDM

<CodeBlock lang="bash">
ps aux | grep dm
</CodeBlock>

然后重启一下GDM，发现竟然好了，迷之系统，咱也不知道咋回事。

<CodeBlock lang="bash">
sudo service gdm restart
</CodeBlock>

重启过程中会黑屏，提前做好准备。

出现问题的话慢慢寻找原因，如果无法解决，建议重新安装 : (

<CodeBlock lang="bash">
#卸载旧驱动
sudo apt-get purge nvidia-*
#重新生成X配置文件
sudo dpkg-reconfigure xserver-xorg
#重启
sudo reboot
</CodeBlock>
