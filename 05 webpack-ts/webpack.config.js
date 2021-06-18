const path = require('path');

module.exports = {
  // ָ������ļ�
  entry:"./src/index.ts",

  // ָ������ļ�
  output:{
    // ָ��������Ŀ¼
    path:path.resolve(__dirname,'dist'),
    // ������ļ���
    filename:"bundle.js",
  },
  // ָ�����ʱҪʹ�õ�ģ��
  module:{
    // ָ��loader���صĹ���
    rules:[
      {
        // ָ��������Ч���ļ�
        test:/\.ts$/,
        // Ҫʹ�õ�loader
        use:'ts-loader',
        // ָ���ų����ļ�
        exclude:/node-modules/
      }
    ]
  }
}