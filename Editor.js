import React, { Component } from 'react';
import E from 'wangeditor'
//import { inject, observer } from 'mobx-react'
//import { withRouter } from 'react-router-dom'

//@withRouter @inject('appStore') @observer
class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
         };
    }

    componentDidMount() {
         var _this=this
        const elemMenu = this.refs.editorElemMenu;
        const elemBody = this.refs.editorElemBody;
        const editor = new E(elemMenu,elemBody)
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.customConfig.onchange = html => {
            _this.props.editorContent(editor.txt.html())
            console.log(editor.txt.html())
        }
        editor.customConfig.menus = [
            'head',  // 标题
            'bold',  // 粗体
            'fontSize',  // 字号
            'fontName',  // 字体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'quote',  // 引用
            'emoticon',  // 表情
            'image',  // 插入图片
            'table',  // 表格
            'video',  // 插入视频
            'code',  // 插入代码
            'undo',  // 撤销
            'redo'  // 重复
        ]
        editor.customConfig.uploadImgShowBase64 = true
        editor.create()
        console.log("传到子组件",this.props.singleRemarks)
        //接收值 完成初始化
        editor.txt.html(this.props.singleRemarks)
        _this.props.editorContent(editor.txt.html())
    };
    render() {
        return (
            <div className="shop">
                <div className="text-area" >
                    <div ref="editorElemMenu"
                         style={{backgroundColor:'#f1f1f1',border:"1px solid #ccc"}}
                         className="editorElem-menu">

                    </div>
                    <div
                        style={{
                            padding:"0 10px",
                            overflowY:"scroll",
                            height:300,
                            border:"1px solid #ccc",
                            borderTop:"none"
                        }}
                        ref="editorElemBody" className="editorElem-body">

                    </div>
                </div>
            </div>
        );
    }
}

export default Editor;
// 父组件引用 singleRemarks为展开时传入的初始化值
// editorContent为实时更新的传递给父组件的值
{/* <Editor  singleRemarks={this.state.singleRemarks} editorContent={(edicontent)=>{_this.setState({edicontent:edicontent})}}></Editor> */}
