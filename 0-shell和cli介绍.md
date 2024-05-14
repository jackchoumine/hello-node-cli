# shell 和 cli 介绍

## 什么是 shell

shell 是一个**命令行解释器**，它为用户提供了一个向 Linux 内核发送请求以便运行程序的界面系统级程序，用户可以用 shell 来启动、挂起、停止甚至是编写一些程序。

比如

```bash
ls # 列出当前目录下的文件
```

## shell 的种类

shell 是一个抽象的概念，有很多种不同的 shell 实现，即很多程序实现了 shell 的功能，常见的有：

- Bourne Shell（/usr/bin/sh 或 /bin/sh）
- Bourne Again Shell（/bin/bash）
- C Shell（/usr/bin/csh）
- K Shell（/usr/bin/ksh）
- Shell for Root（/sbin/sh）
- Z Shell（/usr/bin/zsh）

### 如何看当前使用的 shell

```bash
echo $SHELL
# /bin/zsh # 我的是 zsh
```

### 如何查看当前计算机支持的 shell

```bash
cat /etc/shells
```

> cat: /ect/shells: No such file or directory

提示没有这个文件，这是因为我使用的是 zsh，而 zsh 不会读取这个文件，所以我们可以使用下面的命令来查看当前计算机支持的 shell：

```bash
 cat /etc/passwd | cut -d ':' -f 7
# /usr/bin/false
# /bin/sh
# /usr/bin/false
# /usr/sbin/uucico 还有很多
```

### 如何切换 shell

```bash
bash # 切换到 bash 切换后会看到提示符变化
```

## CLI 介绍

CLI（Command Line Interface）即命令行界面，是一种用户界面，是通过**文本终端**进行的用户界面，用户通过键盘输入指令，计算机接收到指令后，予以执行并返回执行结果。

图形界面（GUI）是通过图形化的方式进行操作，而 CLI 是通过命令行的方式进行操作。


