import UI from '../../ui/UI';

/**
 * 纹理设置窗口
 * @author tengge / https://github.com/tengge1
 * @param {*} options 
 */
function TextureSettingWindow(options) {
    UI.Control.call(this, options);
    this.app = options.app;
}

TextureSettingWindow.prototype = Object.create(UI.Control.prototype);
TextureSettingWindow.prototype.constructor = TextureSettingWindow;

TextureSettingWindow.prototype.render = function () {
    this.window = UI.create({
        xtype: 'window',
        title: '纹理设置',
        width: '500px',
        height: '300px',
        bodyStyle: {
            padding: 0
        },
        shade: false,
        children: [{
            xtype: 'row',
            children: [{
                xtype: 'label',
                text: '各向异性'
            }, {
                xtype: 'int',
                id: 'anisotropy',
                scope: this.id,
                style: {
                    width: '80px'
                },
                range: [1, 16]
            }]
        }, {
            xtype: 'row',
            children: [{
                xtype: 'label',
                text: '中心点'
            }, {
                xtype: 'number',
                id: 'centerX',
                scope: this.id,
                style: {
                    width: '40px'
                }
            }, {
                xtype: 'number',
                id: 'centerY',
                scope: this.id,
                style: {
                    width: '40px'
                }
            }]
        }, {
            xtype: 'row',
            children: [{
                xtype: 'label',
                text: '偏移'
            }, {
                xtype: 'number',
                id: 'offsetX',
                scope: this.id,
                style: {
                    width: '40px'
                }
            }, {
                xtype: 'number',
                id: 'offsetY',
                scope: this.id,
                style: {
                    width: '40px'
                }
            }]
        }, {
            xtype: 'row',
            children: [{
                xtype: 'label',
                text: '重复'
            }, {
                xtype: 'int',
                id: 'repeatX',
                scope: this.id,
                style: {
                    width: '40px'
                }
            }, {
                xtype: 'int',
                id: 'repearY',
                scope: this.id,
                style: {
                    width: '40px'
                }
            }]
        }, {
            xtype: 'row',
            children: [{
                xtype: 'label',
                text: '旋转'
            }, {
                xtype: 'number',
                id: 'rotation',
                scope: this.id,
                style: {
                    width: '40px'
                }
            }]
        }, {
            xtype: 'row',
            children: [{
                xtype: 'label',
                text: '类型'
            }, {
                xtype: 'select',
                id: 'type',
                scope: this.id,
                options: {
                    [THREE.UnsignedByteType]: 'UnsignedByteType',
                    [THREE.ByteType]: 'ByteType',
                    [THREE.ShortType]: 'ShortType',
                    [THREE.UnsignedShortType]: 'UnsignedShortType',
                    [THREE.IntType]: 'IntType',
                    [THREE.UnsignedIntType]: 'UnsignedIntType',
                    [THREE.FloatType]: 'FloatType',
                    [THREE.HalfFloatType]: 'HalfFloatType',
                    [THREE.UnsignedShort4444Type]: 'UnsignedShort4444Type',
                    [THREE.UnsignedShort5551Type]: 'UnsignedShort5551Type',
                    [THREE.UnsignedShort565Type]: 'UnsignedShort565Type',
                    [THREE.UnsignedInt248Type]: 'UnsignedInt248Type'
                },
                style: {
                    width: '120px'
                }
            }]
        }, {
            xtype: 'row',
            children: [{
                xtype: 'label',
                text: '编码'
            }, {
                xtype: 'select',
                id: 'encoding',
                scope: this.id,
                options: {
                    [THREE.LinearEncoding]: 'LinearEncoding',
                    [THREE.sRGBEncoding]: 'sRGBEncoding',
                    [THREE.GammaEncoding]: 'GammaEncoding',
                    [THREE.RGBEEncoding]: 'RGBEEncoding',
                    [THREE.LogLuvEncoding]: 'LogLuvEncoding',
                    [THREE.RGBM7Encoding]: 'RGBM7Encoding',
                    [THREE.RGBM16Encoding]: 'RGBM16Encoding',
                    [THREE.RGBDEncoding]: 'RGBDEncoding',
                    [THREE.BasicDepthPacking]: 'BasicDepthPacking',
                    [THREE.RGBADepthPacking]: 'RGBADepthPacking'
                },
                style: {
                    width: '120px'
                }
            }]
        }, {
            xtype: 'row',
            children: [{
                xtype: 'label',
                text: '反转Y'
            }, {
                xtype: 'checkbox',
                id: 'flipY',
                scope: this.id
            }]
        }, {
            xtype: 'row',
            children: [{
                xtype: 'label',
                text: '格式'
            }, {
                xtype: 'select',
                id: 'format',
                scope: this.id,
                options: {
                    [THREE.RGBAFormat]: 'RGBAFormat',
                    [THREE.AlphaFormat]: 'AlphaFormat',
                    [THREE.RGBFormat]: 'RGBFormat',
                    [THREE.LuminanceFormat]: 'LuminanceFormat',
                    [THREE.LuminanceAlphaFormat]: 'LuminanceAlphaFormat',
                    [THREE.RGBEFormat]: 'RGBEFormat',
                    [THREE.DepthFormat]: 'DepthFormat',
                    [THREE.DepthStencilFormat]: 'DepthStencilFormat'
                },
                style: {
                    width: '120px'
                }
            }]
        }, {
            xtype: 'row',
            children: [{
                xtype: 'label',
                text: '开启层级'
            }, {
                xtype: 'checkbox',
                id: 'generateMipmaps',
                scope: this.id
            }]
        }, {
            xtype: 'row',
            children: [{
                xtype: 'label',
                text: '放大过滤'
            }, {
                xtype: 'select',
                id: 'magFilter',
                scope: this.id,
                options: {
                    [THREE.LinearFilter]: 'LinearFilter',
                    [THREE.NearestFilter]: 'NearestFilter'
                },
                style: {
                    width: '120px'
                }
            }]
        }, {
            xtype: 'row',
            children: [{
                xtype: 'label',
                text: '缩小过滤'
            }, {
                xtype: 'select',
                id: 'minFilter',
                scope: this.id,
                options: {
                    [THREE.LinearMipMapLinearFilter]: 'LinearMipMapLinearFilter',
                    [THREE.NearestFilter]: 'NearestFilter',
                    [THREE.NearestMipMapNearestFilter]: 'NearestMipMapNearestFilter',
                    [THREE.NearestMipMapLinearFilter]: 'NearestMipMapLinearFilter',
                    [THREE.LinearFilter]: 'LinearFilter',
                    [THREE.LinearMipMapNearestFilter]: 'LinearMipMapNearestFilter'
                },
                style: {
                    width: '120px'
                }
            }]
        }, {
            xtype: 'row',
            children: [{
                xtype: 'label',
                text: '映射'
            }, {
                xtype: 'select',
                id: 'mapping',
                scope: this.id,
                options: {
                    [THREE.UVMapping]: 'UVMapping',
                    [THREE.CubeReflectionMapping]: 'CubeReflectionMapping',
                    [THREE.CubeRefractionMapping]: 'CubeRefractionMapping',
                    [THREE.EquirectangularReflectionMapping]: 'EquirectangularReflectionMapping',
                    [THREE.EquirectangularRefractionMapping]: 'EquirectangularRefractionMapping',
                    [THREE.SphericalReflectionMapping]: 'SphericalReflectionMapping',
                    [THREE.CubeUVReflectionMapping]: 'CubeUVReflectionMapping',
                    [THREE.CubeUVRefractionMapping]: 'CubeUVRefractionMapping'
                },
                style: {
                    width: '120px'
                }
            }]
        }, {
            xtype: 'row',
            children: [{
                xtype: 'label',
                text: '左乘透明'
            }, {
                xtype: 'checkbox',
                id: 'premultiplyAlpha',
                scope: this.id
            }]
        }, {
            xtype: 'row',
            children: [{
                xtype: 'label',
                text: '解压对齐'
            }, {
                xtype: 'select',
                id: 'unpackAlignment',
                scope: this.id,
                options: {
                    [4]: '4',
                    [1]: '1',
                    [2]: '2',
                    [8]: '8'
                },
                style: {
                    width: '120px'
                }
            }]
        }, {
            xtype: 'row',
            children: [{
                xtype: 'label',
                text: '横向包装'
            }, {
                xtype: 'select',
                id: 'wrapS',
                scope: this.id,
                options: {
                    [THREE.ClampToEdgeWrapping]: 'ClampToEdgeWrapping',
                    [THREE.RepeatWrapping]: 'RepeatWrapping',
                    [THREE.MirroredRepeatWrapping]: 'MirroredRepeatWrapping'
                },
                style: {
                    width: '120px'
                }
            }]
        }, {
            xtype: 'row',
            children: [{
                xtype: 'label',
                text: '纵向包装'
            }, {
                xtype: 'select',
                id: 'wrapT',
                scope: this.id,
                options: {
                    [THREE.ClampToEdgeWrapping]: 'ClampToEdgeWrapping',
                    [THREE.RepeatWrapping]: 'RepeatWrapping',
                    [THREE.MirroredRepeatWrapping]: 'MirroredRepeatWrapping'
                },
                style: {
                    width: '120px'
                }
            }]
        }]
    });
    this.window.render();
};

TextureSettingWindow.prototype.show = function () {
    this.window.show();
};

TextureSettingWindow.prototype.hide = function () {
    this.window.hide();
};

TextureSettingWindow.prototype.setData = function (texture) {
    var anisotropy = UI.get('anisotropy', this.id);
    var centerX = UI.get('centerX', this.id);
    var centerY = UI.get('centerY', this.id);
    var offsetX = UI.get('offsetX', this.id);
    var offsetY = UI.get('offsetY', this.id);
    var repeatX = UI.get('repeatX', this.id);
    var repeatY = UI.get('repeatY', this.id);
    var rotation = UI.get('rotation', this.id);
    var type = UI.get('type', this.id);
    var encoding = UI.get('encoding', this.id);
    var flipY = UI.get('flipY', this.id);
    var format = UI.get('format', this.id);
    var generateMipmaps = UI.get('generateMipmaps', this.id);
    var magFilter = UI.get('magFilter', this.id);
    var minFilter = UI.get('minFilter', this.id);
    var mapping = UI.get('mapping', this.id);
    var premultiplyAlpha = UI.get('premultiplyAlpha', this.id);
    var unpackAlignment = UI.get('unpackAlignment', this.id);
    var wrapS = UI.get('wrapS', this.id);
    var wrapT = UI.get('wrapT', this.id);
};

export default TextureSettingWindow;