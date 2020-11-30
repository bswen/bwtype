const CONFIG_NAME = 'typePad';

define(['Article', 'ArticleType'],function (Article, ArticleType) {
   /**
    * 配置参数
    */
   class Config {
      constructor() {
         if (this.hasSavedData()){
            let config = JSON.parse(localStorage.getItem(CONFIG_NAME));
            this.chapter            = config.chapter;
            this.chapterTotal       = config.chapterTotal;
            this.isShuffle          = config.isShuffle;
            this.isInEnglishMode    = config.isInEnglishMode;
            this.isAutoNext         = config.isAutoNext;
            this.isAutoRepeat       = config.isAutoRepeat;
            this.isShuffleRepeat    = config.isShuffleRepeat;
            this.repeatCount        = config.repeatCount;
            this.repeatCountCurrent = config.repeatCountCurrent;
            this.count              = config.count;
            this.articleIdentifier  = config.articleIdentifier;
            this.articleName        = config.articleName;
            this.article            = config.article;
            this.darkMode           = config.darkMode;
            this.articleType        = config.articleType;
            this.IDBIndex           = config.IDBIndex;
         } else {
            this.chapter            = 1;                      // 当前段号
            this.chapterTotal       = 1;                      // 总段数
            this.isShuffle          = false;                  // 是否乱序模式
            this.isInEnglishMode    = false;                  // 是否处于英文打字状态
            this.isAutoNext         = false;                  // 自动发文
            this.isAutoRepeat       = false;                  // 重复发文
            this.isShuffleRepeat    = false;                  // 重复发文时乱序
            this.repeatCount        = 1;                      // 总重复数
            this.repeatCountCurrent = 1;                      // 当前重复数
            this.count              = '15';                   // 单条数量
            this.articleName        = Article.top500.name;    // 文章名称
            this.articleIdentifier  = 'top500';               // 文章标识
            this.article            = Article.top500.content; // 文章内容
            this.darkMode           = false;                  // 暗黑模式
            this.articleType        = ArticleType.character;  // 文章类型
            this.IDBIndex           = 1;                      // IndexDB    序号
         }
      }
      save(){
         localStorage.setItem(CONFIG_NAME, JSON.stringify(this));
      }
      // 判断是否存储过配置信息
      hasSavedData(){
         return Boolean(localStorage.getItem(CONFIG_NAME));
      }
   }
   return Config
})


function $(selector){
   return document.querySelector(selector)
}