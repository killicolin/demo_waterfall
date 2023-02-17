(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/spectral_graph/spectral_graph.js":
/*!*******************************************************!*\
  !*** ./node_modules/spectral_graph/spectral_graph.js ***!
  \*******************************************************/
/*! exports provided: __wbg_set_wasm, EventLoopJs, WaterfallGraph, WebglGraph, WebgpuGraph, WebgpuGraphJs, __wbindgen_object_drop_ref, __wbindgen_object_clone_ref, __wbindgen_cb_drop, __wbindgen_string_new, __wbg_new_abda76e883ba8a5f, __wbg_stack_658279fe44541cf6, __wbg_error_f851667af71bcfc6, __wbindgen_string_get, __wbindgen_boolean_get, __wbindgen_number_get, __wbindgen_number_new, __wbg_instanceof_WebGl2RenderingContext_61bb2cb23346dbb7, __wbg_beginQuery_fb152d8d84f2b130, __wbg_bindBufferRange_f2c529259df5358e, __wbg_bindSampler_6eb88b542e5a410f, __wbg_bindVertexArray_8b71290041cb6746, __wbg_blitFramebuffer_86eee8a5763ded5e, __wbg_bufferData_573e61c49a480c4d, __wbg_bufferData_16f948547d74c866, __wbg_bufferSubData_c7180c0b681078e8, __wbg_clearBufferfi_95daf829c568e58a, __wbg_clearBufferfv_b3c90fbed3b74920, __wbg_clearBufferiv_fe2a00a8f8fb7322, __wbg_clearBufferuiv_a41730a8d84c6ac6, __wbg_clientWaitSync_ae8f3712f85a57fb, __wbg_compressedTexSubImage2D_23b602b828848fb7, __wbg_compressedTexSubImage2D_d6c95fc640a9f4de, __wbg_compressedTexSubImage3D_00b794917e65d559, __wbg_compressedTexSubImage3D_c9c7b42e0f7db586, __wbg_copyBufferSubData_c903618a0e0a9fca, __wbg_copyTexSubImage3D_88fc9e1c56d3e7db, __wbg_createSampler_d1255ae3836b1bee, __wbg_createVertexArray_de7292bbd7ea02dd, __wbg_deleteQuery_0981fb4d492e46a7, __wbg_deleteSampler_6d832d1900eafbea, __wbg_deleteSync_f8f026807b7eee54, __wbg_deleteVertexArray_dc4f1b2e5ac93f24, __wbg_drawArraysInstanced_1222b6236d008088, __wbg_drawBuffers_3223f0aeb44f7057, __wbg_drawElementsInstanced_b4714f8dd90fd2a8, __wbg_endQuery_726967da9d5d1ca7, __wbg_fenceSync_fb3e1185847ee462, __wbg_framebufferTextureLayer_e644333b8ec36f9d, __wbg_getBufferSubData_cd8138c86821bca3, __wbg_getIndexedParameter_5f5c79f6c05edd18, __wbg_getQueryParameter_e0f43fb85f793bbe, __wbg_getSyncParameter_b2f55318719e958c, __wbg_getUniformBlockIndex_a05b0c144aa49817, __wbg_invalidateFramebuffer_696c3c456c34a207, __wbg_readBuffer_bade27c1171e00cf, __wbg_readPixels_493558abd28a3b61, __wbg_readPixels_92102ee9fe1c81a0, __wbg_renderbufferStorageMultisample_9cb173d2fd461513, __wbg_samplerParameterf_38ca759dc5c40461, __wbg_samplerParameteri_c631c02ceefc6dc1, __wbg_texStorage2D_89c29252632da923, __wbg_texStorage3D_3897fb6b91eb82d8, __wbg_texSubImage2D_6a8b0f3381d734c3, __wbg_texSubImage2D_53b6a050a0b9b24e, __wbg_texSubImage3D_84ef903e11598af0, __wbg_texSubImage3D_1d82135e9ce965bf, __wbg_uniform2fv_ffd0b1d3c3a4070a, __wbg_uniform2iv_32329f9a4d491136, __wbg_uniform3fv_bc831e48acb2c057, __wbg_uniform3iv_100a284f5a3cbca5, __wbg_uniform4fv_26d822da5c3fdb00, __wbg_uniform4iv_7f03c41e6e49bbd6, __wbg_uniformBlockBinding_1971f4528d9c3043, __wbg_uniformMatrix2fv_5f1f56c7cbfb533f, __wbg_uniformMatrix3fv_ae9271db8127a57b, __wbg_uniformMatrix4fv_0f42d678a568ded9, __wbg_vertexAttribDivisor_77f020121066a4d9, __wbg_vertexAttribIPointer_b15ad1437a268cf5, __wbg_activeTexture_0daf7c1698e49f00, __wbg_attachShader_3038234860d2d59d, __wbg_bindBuffer_9cb064991696b79f, __wbg_bindFramebuffer_0522db2a250c29f0, __wbg_bindRenderbuffer_1e4928d9bf839c02, __wbg_bindTexture_0c284b1604ba527c, __wbg_blendColor_a17ddceb3534e0b3, __wbg_blendEquation_b5d5be767bd3835a, __wbg_blendEquationSeparate_d2fa3b718ee3579f, __wbg_blendFunc_d456b0c766f8dbc9, __wbg_blendFuncSeparate_9a7146974b3cd76d, __wbg_colorMask_a7f067283ed312c9, __wbg_compileShader_af777dd3b15798b3, __wbg_copyTexSubImage2D_47b14ff8459fd4c8, __wbg_createBuffer_5ed0554ab35780b5, __wbg_createFramebuffer_86883935c13ddd59, __wbg_createProgram_7d25c1dd3bb0ce39, __wbg_createRenderbuffer_b392324e044d389a, __wbg_createShader_96339db58713e350, __wbg_createTexture_c651f9e28d1ce9d2, __wbg_cullFace_79e4ddbea13278b3, __wbg_deleteBuffer_cf67a696a7857b3f, __wbg_deleteFramebuffer_f9c2bceeb5422d9d, __wbg_deleteProgram_9c8fa1ef341cb01d, __wbg_deleteRenderbuffer_cad502ac8d1398f2, __wbg_deleteShader_f48f72524f5ee3ed, __wbg_deleteTexture_1b5f5e536e0d5545, __wbg_depthFunc_2060ec3687ac1f95, __wbg_depthMask_27d367443a80541d, __wbg_depthRange_7109c2393819a37b, __wbg_disable_3adb8645ea1d92d4, __wbg_disableVertexAttribArray_f469283fda607cee, __wbg_drawArrays_84de8a2416396807, __wbg_drawElements_dcb8df9c52e2bbd5, __wbg_enable_1ac9f14a577b7c8b, __wbg_enableVertexAttribArray_53139716d9c95dba, __wbg_framebufferRenderbuffer_77bdb2f359a5728f, __wbg_framebufferTexture2D_885176f16a153fec, __wbg_frontFace_3d7784c56ffede8a, __wbg_getActiveUniform_9c4ac7c1ccf5f894, __wbg_getExtension_f0070583175271d4, __wbg_getParameter_56d47f9b55e463d4, __wbg_getProgramInfoLog_7654794297967ac0, __wbg_getProgramParameter_5b1a40917aa850f8, __wbg_getShaderInfoLog_915d0e8506c11159, __wbg_getShaderParameter_f9240892c9e7a0a3, __wbg_getSupportedExtensions_7af8f7bbdd4d7b2c, __wbg_getUniformLocation_c6caabb349b43da7, __wbg_linkProgram_2d5cc584654696b8, __wbg_pixelStorei_a0b83efc92cd29fe, __wbg_polygonOffset_03d3955d5a1afa08, __wbg_renderbufferStorage_2192d9cd09128339, __wbg_scissor_2b084e0dc81d67f4, __wbg_shaderSource_57883245cdfb0dca, __wbg_stencilFuncSeparate_3be68afd7ca6efcc, __wbg_stencilMask_144b86d15d9fdbe6, __wbg_stencilMaskSeparate_84a2494b967772c7, __wbg_stencilOpSeparate_1708aea1aea0dc48, __wbg_texParameteri_e0ce3810261e0864, __wbg_uniform1f_dcc6951bde745417, __wbg_uniform1i_4fdc6d6740375d22, __wbg_uniform4f_19b349303edb7836, __wbg_useProgram_2f4094faf45ecba1, __wbg_vertexAttribPointer_ad370785358334f4, __wbg_viewport_cc41e28a71c23915, __wbg_instanceof_Window_e266f02eee43b570, __wbg_document_950215a728589a2d, __wbg_innerWidth_7e9d12e05bcb598e, __wbg_innerHeight_3ef25a30618357e0, __wbg_devicePixelRatio_5f8f5cab76864090, __wbg_cancelAnimationFrame_d079cdb83bc43b26, __wbg_matchMedia_967e50e4289050fa, __wbg_requestAnimationFrame_afe426b568f84138, __wbg_get_e6ae480a4b8df368, __wbg_clearTimeout_b2b8af0f044e02e9, __wbg_setTimeout_6609c9aa64f32bfc, __wbg_matches_7b5ad9e6bb56f1f3, __wbg_addListener_dfc3f9e430149b14, __wbg_removeListener_6f811d2fb59768b9, __wbg_size_5ce324b99223d189, __wbg_type_979610383a4b7c57, __wbg_name_1e6651aff4fe7a88, __wbg_drawArraysInstancedANGLE_403faa11d52ccf6d, __wbg_drawElementsInstancedANGLE_0230afc27cf9cec9, __wbg_vertexAttribDivisorANGLE_6bbb3df4c6e7d08b, __wbg_setProperty_21e2e7868b86a93e, __wbg_x_0938e87a3ff14a2e, __wbg_y_b881176a43492948, __wbg_pointerId_d2caae4465ba386f, __wbg_pressure_352c13794490720b, __wbg_pointerType_df759fa0bd6634ed, __wbg_deltaX_b7d127c94d6265c0, __wbg_deltaY_b32fa858e16edcc0, __wbg_deltaMode_11f7b19e64d9a515, __wbg_clientX_35f23f953e04ec0e, __wbg_clientY_8104e462abc0b3ec, __wbg_offsetX_413d9f02022e72ad, __wbg_offsetY_488f80a0a9666028, __wbg_ctrlKey_e1b8f1de1eb24d5d, __wbg_shiftKey_fdd99b6df96e25c5, __wbg_altKey_d531a4d3704557cb, __wbg_metaKey_934772989e28020c, __wbg_button_a1c470d5e4c997f2, __wbg_buttons_42a7b7de33d8e572, __wbg_movementX_f4d07f6658c1e16f, __wbg_movementY_30276c1f90aec4fa, __wbg_instanceof_HtmlCanvasElement_f5f69dab93281ebe, __wbg_width_a40e21a22129b197, __wbg_setwidth_81c62bc806e0a727, __wbg_height_98d51321254345a5, __wbg_setheight_98cf0db22c40ef07, __wbg_getContext_89a318b610dc5fd4, __wbg_matches_46e979ff3e4d0811, __wbg_bindVertexArrayOES_688eba003a98a0bb, __wbg_createVertexArrayOES_02cfe655604046eb, __wbg_deleteVertexArrayOES_ba22911f739464a7, __wbg_now_c644db5194be8437, __wbg_drawBuffersWEBGL_dfb0d803ea7ebe07, __wbg_fullscreenElement_65f14a4df7c25129, __wbg_createElement_e2a0e21263eb5416, __wbg_getElementById_eb93a47327bb5585, __wbg_querySelector_32b9d7ebb2df951d, __wbg_getBoundingClientRect_aaa701cbcb448965, __wbg_requestFullscreen_4eee04b9090fa98a, __wbg_setAttribute_79c9562d32d05e66, __wbg_setPointerCapture_5479dc0d082282b7, __wbg_style_2141664e428fef46, __wbg_bufferData_05664df801d7aec0, __wbg_bufferData_023700b2ed207c43, __wbg_bufferSubData_4e653f611d7a962d, __wbg_compressedTexSubImage2D_788296e97b316838, __wbg_readPixels_30de7174c15126d3, __wbg_texSubImage2D_57792696288b0a61, __wbg_uniform2fv_c29ce786946f1aae, __wbg_uniform2iv_58c3d5ee9e70c71d, __wbg_uniform3fv_5ca48b3279e0c643, __wbg_uniform3iv_0a103fe131bd9213, __wbg_uniform4fv_14f1c5ef10bfb4c9, __wbg_uniform4iv_9436eeda2a27cce8, __wbg_uniformMatrix2fv_1a40e9f63b2005c8, __wbg_uniformMatrix3fv_dcde28ba8c34d30e, __wbg_uniformMatrix4fv_4575a018c8188146, __wbg_activeTexture_01d5469eb22c10e7, __wbg_attachShader_14fb12e2ae589dc3, __wbg_bindBuffer_b7c382dcd70e33f6, __wbg_bindFramebuffer_a5ab0ed0463586cb, __wbg_bindRenderbuffer_2d67c879cdbe5ea9, __wbg_bindTexture_c1c0e00507424f8e, __wbg_blendColor_13739d87434b79c3, __wbg_blendEquation_562c3267161e4675, __wbg_blendEquationSeparate_48b95e78f7224be4, __wbg_blendFunc_f4365f78b650180f, __wbg_blendFuncSeparate_b508053691b6ebbe, __wbg_colorMask_99120a2c8caf1298, __wbg_compileShader_4e9130ccbd4a0238, __wbg_copyTexSubImage2D_7c0b0080eece3c1a, __wbg_createBuffer_8c64250e5283611c, __wbg_createFramebuffer_1f943a32c748753e, __wbg_createProgram_28db0ff3cee5f71a, __wbg_createRenderbuffer_a76dcfda7bdc749a, __wbg_createShader_c5fcd8592f47b510, __wbg_createTexture_81fd93af28301e0e, __wbg_cullFace_d4450f8718c6b3eb, __wbg_deleteBuffer_17feed38f3a70ec9, __wbg_deleteFramebuffer_130abca01c89b7d6, __wbg_deleteProgram_dd5f0e2bc555e270, __wbg_deleteRenderbuffer_385f3c9e8759b99e, __wbg_deleteShader_fac9fb3cdefdf6ec, __wbg_deleteTexture_605a36a7e380df5f, __wbg_depthFunc_00d8a905436dc681, __wbg_depthMask_134f9e3073ca4fd0, __wbg_depthRange_f34f19edea1feadd, __wbg_disable_65425605098b79cf, __wbg_disableVertexAttribArray_cf25f8beb5872364, __wbg_drawArrays_e5fa3cfc2b5d7c6d, __wbg_drawElements_a388832eba137ef0, __wbg_enable_2c3b6a4692af9b1b, __wbg_enableVertexAttribArray_6dd3d0668209ae19, __wbg_framebufferRenderbuffer_3bf1420713a0b21a, __wbg_framebufferTexture2D_ed03c0674b9979ce, __wbg_frontFace_00177185d2fae697, __wbg_getActiveUniform_e49dcda694ae15ab, __wbg_getParameter_d6cd2dd2cde656ec, __wbg_getProgramInfoLog_7fd2a7c6c1a280c1, __wbg_getProgramParameter_af1cfcccbbc80f71, __wbg_getShaderInfoLog_d057293074e59c61, __wbg_getShaderParameter_685d7d7092c6bae6, __wbg_getUniformLocation_b46e5db76599a918, __wbg_linkProgram_ca9df3fba2fd4125, __wbg_pixelStorei_f97b971917582269, __wbg_polygonOffset_fb73618b77fd3f6f, __wbg_renderbufferStorage_37eab84be1494aef, __wbg_scissor_8bc2e761846f53f0, __wbg_shaderSource_457e8bc42050401d, __wbg_stencilFuncSeparate_510d3287542b4574, __wbg_stencilMask_e1887eeaabe22771, __wbg_stencilMaskSeparate_e89abefeb5641657, __wbg_stencilOpSeparate_aa3d09aa448a6f48, __wbg_texParameteri_9fbb09bbf9670af4, __wbg_uniform1f_062c683ec584f7e8, __wbg_uniform1i_1f8256271b54cf41, __wbg_uniform4f_68fac972655f5359, __wbg_useProgram_6c9019d05fb8d280, __wbg_vertexAttribPointer_ccabef9be68fe1c4, __wbg_viewport_4bdfc4b8959593ee, __wbg_debug_8db2eed1bf6c1e2a, __wbg_error_fe807da27c4a4ced, __wbg_error_2d344a50ccf38b3b, __wbg_info_9e6db45ac337c3b5, __wbg_log_7bb108d119bafbc1, __wbg_warn_e57696dbb3977030, __wbg_addEventListener_615d4590d38da1c9, __wbg_addEventListener_cf5b03cd29763277, __wbg_removeEventListener_343e3ea9fe4c8533, __wbg_charCode_504e79c3e550d1bb, __wbg_keyCode_b33194be2ceec53b, __wbg_altKey_dff2a075455ac01b, __wbg_ctrlKey_993b558f853d64ce, __wbg_shiftKey_31e62e9d172b26f0, __wbg_metaKey_9f0f19692d0498bd, __wbg_key_f0decac219aa904b, __wbg_code_aed21120de275a12, __wbg_getModifierState_03b72700dbe33ad6, __wbg_appendChild_b8199dc1655c852d, __wbg_target_b629c177f9bee3da, __wbg_cancelBubble_c9a8182589205d54, __wbg_preventDefault_16b2170b12f56317, __wbg_stopPropagation_7647c9985222f9b0, __wbg_get_27fe3dac1c4d0224, __wbg_length_e498fbc24f9c1d4f, __wbg_new_b525de17f44a8943, __wbg_newnoargs_2b8b6bd7753c76ba, __wbg_get_baf4855f9a986186, __wbg_call_95d1ea488d03e4e8, __wbg_new_f9876326328f45ed, __wbg_self_e7c1f827057f6584, __wbg_window_a09ec664e14b1b81, __wbg_globalThis_87cbb8506fecf3a9, __wbg_global_c85a9259e621f3db, __wbindgen_is_undefined, __wbg_of_892d7838f8e4cc20, __wbg_push_49c286f04dd3bf59, __wbg_call_9495de66fdbe016b, __wbg_is_8f1618fe9a4fd388, __wbg_new_9d3a9ce4282a18a8, __wbg_resolve_fd40f858d9db1a04, __wbg_then_ec5db6d509eb475f, __wbg_buffer_cf65c07de34b9a08, __wbg_newwithbyteoffsetandlength_55f9ffb569d9fa74, __wbg_newwithbyteoffsetandlength_f477e654086cbbb6, __wbg_newwithbyteoffsetandlength_b57a602974d4b1cd, __wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5, __wbg_newwithbyteoffsetandlength_9241d9d251418ebf, __wbg_newwithbyteoffsetandlength_5c5a6e21987c3bee, __wbg_newwithbyteoffsetandlength_4078d56428eb2926, __wbg_set_6aa458a4ebdb65cb, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_memory, __wbindgen_closure_wrapper805, __wbindgen_closure_wrapper807, __wbindgen_closure_wrapper809, __wbindgen_closure_wrapper811, __wbindgen_closure_wrapper813, __wbindgen_closure_wrapper815, __wbindgen_closure_wrapper817, __wbindgen_closure_wrapper819, __wbindgen_closure_wrapper821, __wbindgen_closure_wrapper952, __wbindgen_closure_wrapper3709 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spectral_graph_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spectral_graph_bg.wasm */ "./node_modules/spectral_graph/spectral_graph_bg.wasm");
/* harmony import */ var _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spectral_graph_bg.js */ "./node_modules/spectral_graph/spectral_graph_bg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_set_wasm", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_set_wasm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventLoopJs", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["EventLoopJs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WaterfallGraph", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["WaterfallGraph"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebglGraph", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["WebglGraph"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebgpuGraph", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["WebgpuGraph"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebgpuGraphJs", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["WebgpuGraphJs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_object_drop_ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_clone_ref", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_object_clone_ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_cb_drop", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_cb_drop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_string_new", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_string_new"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_abda76e883ba8a5f", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_new_abda76e883ba8a5f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_stack_658279fe44541cf6", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_stack_658279fe44541cf6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_f851667af71bcfc6", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_error_f851667af71bcfc6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_string_get", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_string_get"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_boolean_get", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_boolean_get"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_number_get", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_number_get"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_number_new", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_number_new"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_WebGl2RenderingContext_61bb2cb23346dbb7", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_instanceof_WebGl2RenderingContext_61bb2cb23346dbb7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_beginQuery_fb152d8d84f2b130", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_beginQuery_fb152d8d84f2b130"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindBufferRange_f2c529259df5358e", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bindBufferRange_f2c529259df5358e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindSampler_6eb88b542e5a410f", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bindSampler_6eb88b542e5a410f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindVertexArray_8b71290041cb6746", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bindVertexArray_8b71290041cb6746"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_blitFramebuffer_86eee8a5763ded5e", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_blitFramebuffer_86eee8a5763ded5e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bufferData_573e61c49a480c4d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bufferData_573e61c49a480c4d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bufferData_16f948547d74c866", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bufferData_16f948547d74c866"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bufferSubData_c7180c0b681078e8", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bufferSubData_c7180c0b681078e8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_clearBufferfi_95daf829c568e58a", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_clearBufferfi_95daf829c568e58a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_clearBufferfv_b3c90fbed3b74920", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_clearBufferfv_b3c90fbed3b74920"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_clearBufferiv_fe2a00a8f8fb7322", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_clearBufferiv_fe2a00a8f8fb7322"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_clearBufferuiv_a41730a8d84c6ac6", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_clearBufferuiv_a41730a8d84c6ac6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_clientWaitSync_ae8f3712f85a57fb", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_clientWaitSync_ae8f3712f85a57fb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_compressedTexSubImage2D_23b602b828848fb7", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_compressedTexSubImage2D_23b602b828848fb7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_compressedTexSubImage2D_d6c95fc640a9f4de", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_compressedTexSubImage2D_d6c95fc640a9f4de"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_compressedTexSubImage3D_00b794917e65d559", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_compressedTexSubImage3D_00b794917e65d559"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_compressedTexSubImage3D_c9c7b42e0f7db586", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_compressedTexSubImage3D_c9c7b42e0f7db586"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_copyBufferSubData_c903618a0e0a9fca", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_copyBufferSubData_c903618a0e0a9fca"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_copyTexSubImage3D_88fc9e1c56d3e7db", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_copyTexSubImage3D_88fc9e1c56d3e7db"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createSampler_d1255ae3836b1bee", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createSampler_d1255ae3836b1bee"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createVertexArray_de7292bbd7ea02dd", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createVertexArray_de7292bbd7ea02dd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteQuery_0981fb4d492e46a7", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deleteQuery_0981fb4d492e46a7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteSampler_6d832d1900eafbea", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deleteSampler_6d832d1900eafbea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteSync_f8f026807b7eee54", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deleteSync_f8f026807b7eee54"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteVertexArray_dc4f1b2e5ac93f24", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deleteVertexArray_dc4f1b2e5ac93f24"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawArraysInstanced_1222b6236d008088", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_drawArraysInstanced_1222b6236d008088"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawBuffers_3223f0aeb44f7057", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_drawBuffers_3223f0aeb44f7057"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawElementsInstanced_b4714f8dd90fd2a8", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_drawElementsInstanced_b4714f8dd90fd2a8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_endQuery_726967da9d5d1ca7", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_endQuery_726967da9d5d1ca7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_fenceSync_fb3e1185847ee462", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_fenceSync_fb3e1185847ee462"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_framebufferTextureLayer_e644333b8ec36f9d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_framebufferTextureLayer_e644333b8ec36f9d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getBufferSubData_cd8138c86821bca3", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getBufferSubData_cd8138c86821bca3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getIndexedParameter_5f5c79f6c05edd18", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getIndexedParameter_5f5c79f6c05edd18"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getQueryParameter_e0f43fb85f793bbe", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getQueryParameter_e0f43fb85f793bbe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getSyncParameter_b2f55318719e958c", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getSyncParameter_b2f55318719e958c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getUniformBlockIndex_a05b0c144aa49817", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getUniformBlockIndex_a05b0c144aa49817"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_invalidateFramebuffer_696c3c456c34a207", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_invalidateFramebuffer_696c3c456c34a207"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_readBuffer_bade27c1171e00cf", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_readBuffer_bade27c1171e00cf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_readPixels_493558abd28a3b61", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_readPixels_493558abd28a3b61"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_readPixels_92102ee9fe1c81a0", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_readPixels_92102ee9fe1c81a0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_renderbufferStorageMultisample_9cb173d2fd461513", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_renderbufferStorageMultisample_9cb173d2fd461513"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_samplerParameterf_38ca759dc5c40461", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_samplerParameterf_38ca759dc5c40461"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_samplerParameteri_c631c02ceefc6dc1", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_samplerParameteri_c631c02ceefc6dc1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_texStorage2D_89c29252632da923", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_texStorage2D_89c29252632da923"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_texStorage3D_3897fb6b91eb82d8", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_texStorage3D_3897fb6b91eb82d8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_texSubImage2D_6a8b0f3381d734c3", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_texSubImage2D_6a8b0f3381d734c3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_texSubImage2D_53b6a050a0b9b24e", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_texSubImage2D_53b6a050a0b9b24e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_texSubImage3D_84ef903e11598af0", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_texSubImage3D_84ef903e11598af0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_texSubImage3D_1d82135e9ce965bf", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_texSubImage3D_1d82135e9ce965bf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform2fv_ffd0b1d3c3a4070a", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform2fv_ffd0b1d3c3a4070a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform2iv_32329f9a4d491136", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform2iv_32329f9a4d491136"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform3fv_bc831e48acb2c057", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform3fv_bc831e48acb2c057"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform3iv_100a284f5a3cbca5", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform3iv_100a284f5a3cbca5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform4fv_26d822da5c3fdb00", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform4fv_26d822da5c3fdb00"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform4iv_7f03c41e6e49bbd6", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform4iv_7f03c41e6e49bbd6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniformBlockBinding_1971f4528d9c3043", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniformBlockBinding_1971f4528d9c3043"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniformMatrix2fv_5f1f56c7cbfb533f", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniformMatrix2fv_5f1f56c7cbfb533f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniformMatrix3fv_ae9271db8127a57b", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniformMatrix3fv_ae9271db8127a57b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniformMatrix4fv_0f42d678a568ded9", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniformMatrix4fv_0f42d678a568ded9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_vertexAttribDivisor_77f020121066a4d9", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_vertexAttribDivisor_77f020121066a4d9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_vertexAttribIPointer_b15ad1437a268cf5", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_vertexAttribIPointer_b15ad1437a268cf5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_activeTexture_0daf7c1698e49f00", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_activeTexture_0daf7c1698e49f00"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_attachShader_3038234860d2d59d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_attachShader_3038234860d2d59d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindBuffer_9cb064991696b79f", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bindBuffer_9cb064991696b79f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindFramebuffer_0522db2a250c29f0", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bindFramebuffer_0522db2a250c29f0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindRenderbuffer_1e4928d9bf839c02", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bindRenderbuffer_1e4928d9bf839c02"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindTexture_0c284b1604ba527c", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bindTexture_0c284b1604ba527c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendColor_a17ddceb3534e0b3", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_blendColor_a17ddceb3534e0b3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendEquation_b5d5be767bd3835a", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_blendEquation_b5d5be767bd3835a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendEquationSeparate_d2fa3b718ee3579f", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_blendEquationSeparate_d2fa3b718ee3579f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendFunc_d456b0c766f8dbc9", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_blendFunc_d456b0c766f8dbc9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendFuncSeparate_9a7146974b3cd76d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_blendFuncSeparate_9a7146974b3cd76d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_colorMask_a7f067283ed312c9", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_colorMask_a7f067283ed312c9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_compileShader_af777dd3b15798b3", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_compileShader_af777dd3b15798b3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_copyTexSubImage2D_47b14ff8459fd4c8", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_copyTexSubImage2D_47b14ff8459fd4c8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createBuffer_5ed0554ab35780b5", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createBuffer_5ed0554ab35780b5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createFramebuffer_86883935c13ddd59", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createFramebuffer_86883935c13ddd59"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createProgram_7d25c1dd3bb0ce39", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createProgram_7d25c1dd3bb0ce39"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createRenderbuffer_b392324e044d389a", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createRenderbuffer_b392324e044d389a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createShader_96339db58713e350", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createShader_96339db58713e350"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createTexture_c651f9e28d1ce9d2", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createTexture_c651f9e28d1ce9d2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_cullFace_79e4ddbea13278b3", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_cullFace_79e4ddbea13278b3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteBuffer_cf67a696a7857b3f", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deleteBuffer_cf67a696a7857b3f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteFramebuffer_f9c2bceeb5422d9d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deleteFramebuffer_f9c2bceeb5422d9d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteProgram_9c8fa1ef341cb01d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deleteProgram_9c8fa1ef341cb01d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteRenderbuffer_cad502ac8d1398f2", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deleteRenderbuffer_cad502ac8d1398f2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteShader_f48f72524f5ee3ed", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deleteShader_f48f72524f5ee3ed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteTexture_1b5f5e536e0d5545", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deleteTexture_1b5f5e536e0d5545"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_depthFunc_2060ec3687ac1f95", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_depthFunc_2060ec3687ac1f95"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_depthMask_27d367443a80541d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_depthMask_27d367443a80541d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_depthRange_7109c2393819a37b", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_depthRange_7109c2393819a37b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_disable_3adb8645ea1d92d4", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_disable_3adb8645ea1d92d4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_disableVertexAttribArray_f469283fda607cee", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_disableVertexAttribArray_f469283fda607cee"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawArrays_84de8a2416396807", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_drawArrays_84de8a2416396807"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawElements_dcb8df9c52e2bbd5", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_drawElements_dcb8df9c52e2bbd5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_enable_1ac9f14a577b7c8b", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_enable_1ac9f14a577b7c8b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_enableVertexAttribArray_53139716d9c95dba", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_enableVertexAttribArray_53139716d9c95dba"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_framebufferRenderbuffer_77bdb2f359a5728f", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_framebufferRenderbuffer_77bdb2f359a5728f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_framebufferTexture2D_885176f16a153fec", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_framebufferTexture2D_885176f16a153fec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_frontFace_3d7784c56ffede8a", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_frontFace_3d7784c56ffede8a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getActiveUniform_9c4ac7c1ccf5f894", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getActiveUniform_9c4ac7c1ccf5f894"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getExtension_f0070583175271d4", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getExtension_f0070583175271d4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getParameter_56d47f9b55e463d4", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getParameter_56d47f9b55e463d4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getProgramInfoLog_7654794297967ac0", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getProgramInfoLog_7654794297967ac0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getProgramParameter_5b1a40917aa850f8", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getProgramParameter_5b1a40917aa850f8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getShaderInfoLog_915d0e8506c11159", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getShaderInfoLog_915d0e8506c11159"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getShaderParameter_f9240892c9e7a0a3", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getShaderParameter_f9240892c9e7a0a3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getSupportedExtensions_7af8f7bbdd4d7b2c", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getSupportedExtensions_7af8f7bbdd4d7b2c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getUniformLocation_c6caabb349b43da7", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getUniformLocation_c6caabb349b43da7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_linkProgram_2d5cc584654696b8", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_linkProgram_2d5cc584654696b8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_pixelStorei_a0b83efc92cd29fe", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_pixelStorei_a0b83efc92cd29fe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_polygonOffset_03d3955d5a1afa08", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_polygonOffset_03d3955d5a1afa08"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_renderbufferStorage_2192d9cd09128339", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_renderbufferStorage_2192d9cd09128339"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_scissor_2b084e0dc81d67f4", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_scissor_2b084e0dc81d67f4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_shaderSource_57883245cdfb0dca", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_shaderSource_57883245cdfb0dca"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_stencilFuncSeparate_3be68afd7ca6efcc", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_stencilFuncSeparate_3be68afd7ca6efcc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_stencilMask_144b86d15d9fdbe6", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_stencilMask_144b86d15d9fdbe6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_stencilMaskSeparate_84a2494b967772c7", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_stencilMaskSeparate_84a2494b967772c7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_stencilOpSeparate_1708aea1aea0dc48", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_stencilOpSeparate_1708aea1aea0dc48"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_texParameteri_e0ce3810261e0864", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_texParameteri_e0ce3810261e0864"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform1f_dcc6951bde745417", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform1f_dcc6951bde745417"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform1i_4fdc6d6740375d22", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform1i_4fdc6d6740375d22"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform4f_19b349303edb7836", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform4f_19b349303edb7836"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_useProgram_2f4094faf45ecba1", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_useProgram_2f4094faf45ecba1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_vertexAttribPointer_ad370785358334f4", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_vertexAttribPointer_ad370785358334f4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_viewport_cc41e28a71c23915", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_viewport_cc41e28a71c23915"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_Window_e266f02eee43b570", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_instanceof_Window_e266f02eee43b570"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_document_950215a728589a2d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_document_950215a728589a2d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_innerWidth_7e9d12e05bcb598e", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_innerWidth_7e9d12e05bcb598e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_innerHeight_3ef25a30618357e0", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_innerHeight_3ef25a30618357e0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_devicePixelRatio_5f8f5cab76864090", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_devicePixelRatio_5f8f5cab76864090"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_cancelAnimationFrame_d079cdb83bc43b26", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_cancelAnimationFrame_d079cdb83bc43b26"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_matchMedia_967e50e4289050fa", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_matchMedia_967e50e4289050fa"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_requestAnimationFrame_afe426b568f84138", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_requestAnimationFrame_afe426b568f84138"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_get_e6ae480a4b8df368", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_get_e6ae480a4b8df368"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_clearTimeout_b2b8af0f044e02e9", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_clearTimeout_b2b8af0f044e02e9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setTimeout_6609c9aa64f32bfc", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setTimeout_6609c9aa64f32bfc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_matches_7b5ad9e6bb56f1f3", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_matches_7b5ad9e6bb56f1f3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_addListener_dfc3f9e430149b14", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_addListener_dfc3f9e430149b14"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_removeListener_6f811d2fb59768b9", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_removeListener_6f811d2fb59768b9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_size_5ce324b99223d189", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_size_5ce324b99223d189"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_type_979610383a4b7c57", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_type_979610383a4b7c57"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_name_1e6651aff4fe7a88", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_name_1e6651aff4fe7a88"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawArraysInstancedANGLE_403faa11d52ccf6d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_drawArraysInstancedANGLE_403faa11d52ccf6d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawElementsInstancedANGLE_0230afc27cf9cec9", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_drawElementsInstancedANGLE_0230afc27cf9cec9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_vertexAttribDivisorANGLE_6bbb3df4c6e7d08b", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_vertexAttribDivisorANGLE_6bbb3df4c6e7d08b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setProperty_21e2e7868b86a93e", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setProperty_21e2e7868b86a93e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_x_0938e87a3ff14a2e", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_x_0938e87a3ff14a2e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_y_b881176a43492948", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_y_b881176a43492948"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_pointerId_d2caae4465ba386f", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_pointerId_d2caae4465ba386f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_pressure_352c13794490720b", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_pressure_352c13794490720b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_pointerType_df759fa0bd6634ed", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_pointerType_df759fa0bd6634ed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deltaX_b7d127c94d6265c0", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deltaX_b7d127c94d6265c0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deltaY_b32fa858e16edcc0", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deltaY_b32fa858e16edcc0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deltaMode_11f7b19e64d9a515", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deltaMode_11f7b19e64d9a515"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_clientX_35f23f953e04ec0e", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_clientX_35f23f953e04ec0e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_clientY_8104e462abc0b3ec", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_clientY_8104e462abc0b3ec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_offsetX_413d9f02022e72ad", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_offsetX_413d9f02022e72ad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_offsetY_488f80a0a9666028", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_offsetY_488f80a0a9666028"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_ctrlKey_e1b8f1de1eb24d5d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_ctrlKey_e1b8f1de1eb24d5d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_shiftKey_fdd99b6df96e25c5", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_shiftKey_fdd99b6df96e25c5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_altKey_d531a4d3704557cb", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_altKey_d531a4d3704557cb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_metaKey_934772989e28020c", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_metaKey_934772989e28020c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_button_a1c470d5e4c997f2", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_button_a1c470d5e4c997f2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_buttons_42a7b7de33d8e572", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_buttons_42a7b7de33d8e572"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_movementX_f4d07f6658c1e16f", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_movementX_f4d07f6658c1e16f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_movementY_30276c1f90aec4fa", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_movementY_30276c1f90aec4fa"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_HtmlCanvasElement_f5f69dab93281ebe", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_instanceof_HtmlCanvasElement_f5f69dab93281ebe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_width_a40e21a22129b197", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_width_a40e21a22129b197"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setwidth_81c62bc806e0a727", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setwidth_81c62bc806e0a727"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_height_98d51321254345a5", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_height_98d51321254345a5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setheight_98cf0db22c40ef07", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setheight_98cf0db22c40ef07"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getContext_89a318b610dc5fd4", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getContext_89a318b610dc5fd4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_matches_46e979ff3e4d0811", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_matches_46e979ff3e4d0811"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindVertexArrayOES_688eba003a98a0bb", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bindVertexArrayOES_688eba003a98a0bb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createVertexArrayOES_02cfe655604046eb", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createVertexArrayOES_02cfe655604046eb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteVertexArrayOES_ba22911f739464a7", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deleteVertexArrayOES_ba22911f739464a7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_now_c644db5194be8437", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_now_c644db5194be8437"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawBuffersWEBGL_dfb0d803ea7ebe07", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_drawBuffersWEBGL_dfb0d803ea7ebe07"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_fullscreenElement_65f14a4df7c25129", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_fullscreenElement_65f14a4df7c25129"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createElement_e2a0e21263eb5416", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createElement_e2a0e21263eb5416"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getElementById_eb93a47327bb5585", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getElementById_eb93a47327bb5585"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_querySelector_32b9d7ebb2df951d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_querySelector_32b9d7ebb2df951d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getBoundingClientRect_aaa701cbcb448965", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getBoundingClientRect_aaa701cbcb448965"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_requestFullscreen_4eee04b9090fa98a", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_requestFullscreen_4eee04b9090fa98a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setAttribute_79c9562d32d05e66", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setAttribute_79c9562d32d05e66"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setPointerCapture_5479dc0d082282b7", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setPointerCapture_5479dc0d082282b7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_style_2141664e428fef46", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_style_2141664e428fef46"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bufferData_05664df801d7aec0", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bufferData_05664df801d7aec0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bufferData_023700b2ed207c43", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bufferData_023700b2ed207c43"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bufferSubData_4e653f611d7a962d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bufferSubData_4e653f611d7a962d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_compressedTexSubImage2D_788296e97b316838", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_compressedTexSubImage2D_788296e97b316838"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_readPixels_30de7174c15126d3", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_readPixels_30de7174c15126d3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_texSubImage2D_57792696288b0a61", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_texSubImage2D_57792696288b0a61"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform2fv_c29ce786946f1aae", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform2fv_c29ce786946f1aae"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform2iv_58c3d5ee9e70c71d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform2iv_58c3d5ee9e70c71d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform3fv_5ca48b3279e0c643", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform3fv_5ca48b3279e0c643"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform3iv_0a103fe131bd9213", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform3iv_0a103fe131bd9213"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform4fv_14f1c5ef10bfb4c9", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform4fv_14f1c5ef10bfb4c9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform4iv_9436eeda2a27cce8", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform4iv_9436eeda2a27cce8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniformMatrix2fv_1a40e9f63b2005c8", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniformMatrix2fv_1a40e9f63b2005c8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniformMatrix3fv_dcde28ba8c34d30e", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniformMatrix3fv_dcde28ba8c34d30e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniformMatrix4fv_4575a018c8188146", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniformMatrix4fv_4575a018c8188146"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_activeTexture_01d5469eb22c10e7", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_activeTexture_01d5469eb22c10e7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_attachShader_14fb12e2ae589dc3", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_attachShader_14fb12e2ae589dc3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindBuffer_b7c382dcd70e33f6", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bindBuffer_b7c382dcd70e33f6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindFramebuffer_a5ab0ed0463586cb", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bindFramebuffer_a5ab0ed0463586cb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindRenderbuffer_2d67c879cdbe5ea9", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bindRenderbuffer_2d67c879cdbe5ea9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindTexture_c1c0e00507424f8e", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bindTexture_c1c0e00507424f8e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendColor_13739d87434b79c3", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_blendColor_13739d87434b79c3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendEquation_562c3267161e4675", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_blendEquation_562c3267161e4675"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendEquationSeparate_48b95e78f7224be4", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_blendEquationSeparate_48b95e78f7224be4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendFunc_f4365f78b650180f", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_blendFunc_f4365f78b650180f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendFuncSeparate_b508053691b6ebbe", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_blendFuncSeparate_b508053691b6ebbe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_colorMask_99120a2c8caf1298", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_colorMask_99120a2c8caf1298"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_compileShader_4e9130ccbd4a0238", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_compileShader_4e9130ccbd4a0238"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_copyTexSubImage2D_7c0b0080eece3c1a", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_copyTexSubImage2D_7c0b0080eece3c1a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createBuffer_8c64250e5283611c", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createBuffer_8c64250e5283611c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createFramebuffer_1f943a32c748753e", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createFramebuffer_1f943a32c748753e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createProgram_28db0ff3cee5f71a", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createProgram_28db0ff3cee5f71a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createRenderbuffer_a76dcfda7bdc749a", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createRenderbuffer_a76dcfda7bdc749a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createShader_c5fcd8592f47b510", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createShader_c5fcd8592f47b510"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createTexture_81fd93af28301e0e", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createTexture_81fd93af28301e0e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_cullFace_d4450f8718c6b3eb", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_cullFace_d4450f8718c6b3eb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteBuffer_17feed38f3a70ec9", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deleteBuffer_17feed38f3a70ec9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteFramebuffer_130abca01c89b7d6", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deleteFramebuffer_130abca01c89b7d6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteProgram_dd5f0e2bc555e270", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deleteProgram_dd5f0e2bc555e270"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteRenderbuffer_385f3c9e8759b99e", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deleteRenderbuffer_385f3c9e8759b99e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteShader_fac9fb3cdefdf6ec", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deleteShader_fac9fb3cdefdf6ec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteTexture_605a36a7e380df5f", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deleteTexture_605a36a7e380df5f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_depthFunc_00d8a905436dc681", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_depthFunc_00d8a905436dc681"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_depthMask_134f9e3073ca4fd0", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_depthMask_134f9e3073ca4fd0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_depthRange_f34f19edea1feadd", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_depthRange_f34f19edea1feadd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_disable_65425605098b79cf", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_disable_65425605098b79cf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_disableVertexAttribArray_cf25f8beb5872364", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_disableVertexAttribArray_cf25f8beb5872364"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawArrays_e5fa3cfc2b5d7c6d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_drawArrays_e5fa3cfc2b5d7c6d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawElements_a388832eba137ef0", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_drawElements_a388832eba137ef0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_enable_2c3b6a4692af9b1b", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_enable_2c3b6a4692af9b1b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_enableVertexAttribArray_6dd3d0668209ae19", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_enableVertexAttribArray_6dd3d0668209ae19"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_framebufferRenderbuffer_3bf1420713a0b21a", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_framebufferRenderbuffer_3bf1420713a0b21a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_framebufferTexture2D_ed03c0674b9979ce", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_framebufferTexture2D_ed03c0674b9979ce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_frontFace_00177185d2fae697", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_frontFace_00177185d2fae697"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getActiveUniform_e49dcda694ae15ab", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getActiveUniform_e49dcda694ae15ab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getParameter_d6cd2dd2cde656ec", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getParameter_d6cd2dd2cde656ec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getProgramInfoLog_7fd2a7c6c1a280c1", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getProgramInfoLog_7fd2a7c6c1a280c1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getProgramParameter_af1cfcccbbc80f71", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getProgramParameter_af1cfcccbbc80f71"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getShaderInfoLog_d057293074e59c61", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getShaderInfoLog_d057293074e59c61"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getShaderParameter_685d7d7092c6bae6", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getShaderParameter_685d7d7092c6bae6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getUniformLocation_b46e5db76599a918", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getUniformLocation_b46e5db76599a918"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_linkProgram_ca9df3fba2fd4125", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_linkProgram_ca9df3fba2fd4125"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_pixelStorei_f97b971917582269", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_pixelStorei_f97b971917582269"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_polygonOffset_fb73618b77fd3f6f", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_polygonOffset_fb73618b77fd3f6f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_renderbufferStorage_37eab84be1494aef", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_renderbufferStorage_37eab84be1494aef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_scissor_8bc2e761846f53f0", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_scissor_8bc2e761846f53f0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_shaderSource_457e8bc42050401d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_shaderSource_457e8bc42050401d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_stencilFuncSeparate_510d3287542b4574", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_stencilFuncSeparate_510d3287542b4574"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_stencilMask_e1887eeaabe22771", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_stencilMask_e1887eeaabe22771"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_stencilMaskSeparate_e89abefeb5641657", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_stencilMaskSeparate_e89abefeb5641657"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_stencilOpSeparate_aa3d09aa448a6f48", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_stencilOpSeparate_aa3d09aa448a6f48"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_texParameteri_9fbb09bbf9670af4", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_texParameteri_9fbb09bbf9670af4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform1f_062c683ec584f7e8", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform1f_062c683ec584f7e8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform1i_1f8256271b54cf41", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform1i_1f8256271b54cf41"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform4f_68fac972655f5359", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform4f_68fac972655f5359"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_useProgram_6c9019d05fb8d280", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_useProgram_6c9019d05fb8d280"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_vertexAttribPointer_ccabef9be68fe1c4", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_vertexAttribPointer_ccabef9be68fe1c4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_viewport_4bdfc4b8959593ee", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_viewport_4bdfc4b8959593ee"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_debug_8db2eed1bf6c1e2a", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_debug_8db2eed1bf6c1e2a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_fe807da27c4a4ced", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_error_fe807da27c4a4ced"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_2d344a50ccf38b3b", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_error_2d344a50ccf38b3b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_info_9e6db45ac337c3b5", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_info_9e6db45ac337c3b5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_log_7bb108d119bafbc1", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_log_7bb108d119bafbc1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_warn_e57696dbb3977030", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_warn_e57696dbb3977030"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_addEventListener_615d4590d38da1c9", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_addEventListener_615d4590d38da1c9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_addEventListener_cf5b03cd29763277", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_addEventListener_cf5b03cd29763277"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_removeEventListener_343e3ea9fe4c8533", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_removeEventListener_343e3ea9fe4c8533"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_charCode_504e79c3e550d1bb", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_charCode_504e79c3e550d1bb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_keyCode_b33194be2ceec53b", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_keyCode_b33194be2ceec53b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_altKey_dff2a075455ac01b", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_altKey_dff2a075455ac01b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_ctrlKey_993b558f853d64ce", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_ctrlKey_993b558f853d64ce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_shiftKey_31e62e9d172b26f0", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_shiftKey_31e62e9d172b26f0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_metaKey_9f0f19692d0498bd", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_metaKey_9f0f19692d0498bd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_key_f0decac219aa904b", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_key_f0decac219aa904b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_code_aed21120de275a12", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_code_aed21120de275a12"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getModifierState_03b72700dbe33ad6", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getModifierState_03b72700dbe33ad6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_appendChild_b8199dc1655c852d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_appendChild_b8199dc1655c852d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_target_b629c177f9bee3da", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_target_b629c177f9bee3da"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_cancelBubble_c9a8182589205d54", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_cancelBubble_c9a8182589205d54"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_preventDefault_16b2170b12f56317", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_preventDefault_16b2170b12f56317"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_stopPropagation_7647c9985222f9b0", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_stopPropagation_7647c9985222f9b0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_get_27fe3dac1c4d0224", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_get_27fe3dac1c4d0224"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_length_e498fbc24f9c1d4f", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_length_e498fbc24f9c1d4f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_b525de17f44a8943", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_new_b525de17f44a8943"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newnoargs_2b8b6bd7753c76ba", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newnoargs_2b8b6bd7753c76ba"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_get_baf4855f9a986186", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_get_baf4855f9a986186"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_95d1ea488d03e4e8", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_call_95d1ea488d03e4e8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_f9876326328f45ed", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_new_f9876326328f45ed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_self_e7c1f827057f6584", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_self_e7c1f827057f6584"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_window_a09ec664e14b1b81", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_window_a09ec664e14b1b81"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_globalThis_87cbb8506fecf3a9", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_globalThis_87cbb8506fecf3a9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_global_c85a9259e621f3db", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_global_c85a9259e621f3db"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_is_undefined", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_is_undefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_of_892d7838f8e4cc20", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_of_892d7838f8e4cc20"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_push_49c286f04dd3bf59", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_push_49c286f04dd3bf59"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_9495de66fdbe016b", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_call_9495de66fdbe016b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_is_8f1618fe9a4fd388", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_is_8f1618fe9a4fd388"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_9d3a9ce4282a18a8", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_new_9d3a9ce4282a18a8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_resolve_fd40f858d9db1a04", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_resolve_fd40f858d9db1a04"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_then_ec5db6d509eb475f", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_then_ec5db6d509eb475f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_buffer_cf65c07de34b9a08", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_buffer_cf65c07de34b9a08"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_55f9ffb569d9fa74", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newwithbyteoffsetandlength_55f9ffb569d9fa74"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_f477e654086cbbb6", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newwithbyteoffsetandlength_f477e654086cbbb6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_b57a602974d4b1cd", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newwithbyteoffsetandlength_b57a602974d4b1cd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_9241d9d251418ebf", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newwithbyteoffsetandlength_9241d9d251418ebf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_5c5a6e21987c3bee", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newwithbyteoffsetandlength_5c5a6e21987c3bee"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_4078d56428eb2926", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newwithbyteoffsetandlength_4078d56428eb2926"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_set_6aa458a4ebdb65cb", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_set_6aa458a4ebdb65cb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_debug_string", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_debug_string"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_throw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_memory", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_memory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper805", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper805"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper807", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper807"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper809", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper809"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper811", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper811"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper813", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper813"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper815", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper815"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper817", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper817"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper819", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper819"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper821", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper821"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper952", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper952"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper3709", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper3709"]; });



Object(_spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_set_wasm"])(_spectral_graph_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),

/***/ "./node_modules/spectral_graph/spectral_graph_bg.js":
/*!**********************************************************!*\
  !*** ./node_modules/spectral_graph/spectral_graph_bg.js ***!
  \**********************************************************/
/*! exports provided: __wbg_set_wasm, EventLoopJs, WaterfallGraph, WebglGraph, WebgpuGraph, WebgpuGraphJs, __wbindgen_object_drop_ref, __wbindgen_object_clone_ref, __wbindgen_cb_drop, __wbindgen_string_new, __wbg_new_abda76e883ba8a5f, __wbg_stack_658279fe44541cf6, __wbg_error_f851667af71bcfc6, __wbindgen_string_get, __wbindgen_boolean_get, __wbindgen_number_get, __wbindgen_number_new, __wbg_instanceof_WebGl2RenderingContext_61bb2cb23346dbb7, __wbg_beginQuery_fb152d8d84f2b130, __wbg_bindBufferRange_f2c529259df5358e, __wbg_bindSampler_6eb88b542e5a410f, __wbg_bindVertexArray_8b71290041cb6746, __wbg_blitFramebuffer_86eee8a5763ded5e, __wbg_bufferData_573e61c49a480c4d, __wbg_bufferData_16f948547d74c866, __wbg_bufferSubData_c7180c0b681078e8, __wbg_clearBufferfi_95daf829c568e58a, __wbg_clearBufferfv_b3c90fbed3b74920, __wbg_clearBufferiv_fe2a00a8f8fb7322, __wbg_clearBufferuiv_a41730a8d84c6ac6, __wbg_clientWaitSync_ae8f3712f85a57fb, __wbg_compressedTexSubImage2D_23b602b828848fb7, __wbg_compressedTexSubImage2D_d6c95fc640a9f4de, __wbg_compressedTexSubImage3D_00b794917e65d559, __wbg_compressedTexSubImage3D_c9c7b42e0f7db586, __wbg_copyBufferSubData_c903618a0e0a9fca, __wbg_copyTexSubImage3D_88fc9e1c56d3e7db, __wbg_createSampler_d1255ae3836b1bee, __wbg_createVertexArray_de7292bbd7ea02dd, __wbg_deleteQuery_0981fb4d492e46a7, __wbg_deleteSampler_6d832d1900eafbea, __wbg_deleteSync_f8f026807b7eee54, __wbg_deleteVertexArray_dc4f1b2e5ac93f24, __wbg_drawArraysInstanced_1222b6236d008088, __wbg_drawBuffers_3223f0aeb44f7057, __wbg_drawElementsInstanced_b4714f8dd90fd2a8, __wbg_endQuery_726967da9d5d1ca7, __wbg_fenceSync_fb3e1185847ee462, __wbg_framebufferTextureLayer_e644333b8ec36f9d, __wbg_getBufferSubData_cd8138c86821bca3, __wbg_getIndexedParameter_5f5c79f6c05edd18, __wbg_getQueryParameter_e0f43fb85f793bbe, __wbg_getSyncParameter_b2f55318719e958c, __wbg_getUniformBlockIndex_a05b0c144aa49817, __wbg_invalidateFramebuffer_696c3c456c34a207, __wbg_readBuffer_bade27c1171e00cf, __wbg_readPixels_493558abd28a3b61, __wbg_readPixels_92102ee9fe1c81a0, __wbg_renderbufferStorageMultisample_9cb173d2fd461513, __wbg_samplerParameterf_38ca759dc5c40461, __wbg_samplerParameteri_c631c02ceefc6dc1, __wbg_texStorage2D_89c29252632da923, __wbg_texStorage3D_3897fb6b91eb82d8, __wbg_texSubImage2D_6a8b0f3381d734c3, __wbg_texSubImage2D_53b6a050a0b9b24e, __wbg_texSubImage3D_84ef903e11598af0, __wbg_texSubImage3D_1d82135e9ce965bf, __wbg_uniform2fv_ffd0b1d3c3a4070a, __wbg_uniform2iv_32329f9a4d491136, __wbg_uniform3fv_bc831e48acb2c057, __wbg_uniform3iv_100a284f5a3cbca5, __wbg_uniform4fv_26d822da5c3fdb00, __wbg_uniform4iv_7f03c41e6e49bbd6, __wbg_uniformBlockBinding_1971f4528d9c3043, __wbg_uniformMatrix2fv_5f1f56c7cbfb533f, __wbg_uniformMatrix3fv_ae9271db8127a57b, __wbg_uniformMatrix4fv_0f42d678a568ded9, __wbg_vertexAttribDivisor_77f020121066a4d9, __wbg_vertexAttribIPointer_b15ad1437a268cf5, __wbg_activeTexture_0daf7c1698e49f00, __wbg_attachShader_3038234860d2d59d, __wbg_bindBuffer_9cb064991696b79f, __wbg_bindFramebuffer_0522db2a250c29f0, __wbg_bindRenderbuffer_1e4928d9bf839c02, __wbg_bindTexture_0c284b1604ba527c, __wbg_blendColor_a17ddceb3534e0b3, __wbg_blendEquation_b5d5be767bd3835a, __wbg_blendEquationSeparate_d2fa3b718ee3579f, __wbg_blendFunc_d456b0c766f8dbc9, __wbg_blendFuncSeparate_9a7146974b3cd76d, __wbg_colorMask_a7f067283ed312c9, __wbg_compileShader_af777dd3b15798b3, __wbg_copyTexSubImage2D_47b14ff8459fd4c8, __wbg_createBuffer_5ed0554ab35780b5, __wbg_createFramebuffer_86883935c13ddd59, __wbg_createProgram_7d25c1dd3bb0ce39, __wbg_createRenderbuffer_b392324e044d389a, __wbg_createShader_96339db58713e350, __wbg_createTexture_c651f9e28d1ce9d2, __wbg_cullFace_79e4ddbea13278b3, __wbg_deleteBuffer_cf67a696a7857b3f, __wbg_deleteFramebuffer_f9c2bceeb5422d9d, __wbg_deleteProgram_9c8fa1ef341cb01d, __wbg_deleteRenderbuffer_cad502ac8d1398f2, __wbg_deleteShader_f48f72524f5ee3ed, __wbg_deleteTexture_1b5f5e536e0d5545, __wbg_depthFunc_2060ec3687ac1f95, __wbg_depthMask_27d367443a80541d, __wbg_depthRange_7109c2393819a37b, __wbg_disable_3adb8645ea1d92d4, __wbg_disableVertexAttribArray_f469283fda607cee, __wbg_drawArrays_84de8a2416396807, __wbg_drawElements_dcb8df9c52e2bbd5, __wbg_enable_1ac9f14a577b7c8b, __wbg_enableVertexAttribArray_53139716d9c95dba, __wbg_framebufferRenderbuffer_77bdb2f359a5728f, __wbg_framebufferTexture2D_885176f16a153fec, __wbg_frontFace_3d7784c56ffede8a, __wbg_getActiveUniform_9c4ac7c1ccf5f894, __wbg_getExtension_f0070583175271d4, __wbg_getParameter_56d47f9b55e463d4, __wbg_getProgramInfoLog_7654794297967ac0, __wbg_getProgramParameter_5b1a40917aa850f8, __wbg_getShaderInfoLog_915d0e8506c11159, __wbg_getShaderParameter_f9240892c9e7a0a3, __wbg_getSupportedExtensions_7af8f7bbdd4d7b2c, __wbg_getUniformLocation_c6caabb349b43da7, __wbg_linkProgram_2d5cc584654696b8, __wbg_pixelStorei_a0b83efc92cd29fe, __wbg_polygonOffset_03d3955d5a1afa08, __wbg_renderbufferStorage_2192d9cd09128339, __wbg_scissor_2b084e0dc81d67f4, __wbg_shaderSource_57883245cdfb0dca, __wbg_stencilFuncSeparate_3be68afd7ca6efcc, __wbg_stencilMask_144b86d15d9fdbe6, __wbg_stencilMaskSeparate_84a2494b967772c7, __wbg_stencilOpSeparate_1708aea1aea0dc48, __wbg_texParameteri_e0ce3810261e0864, __wbg_uniform1f_dcc6951bde745417, __wbg_uniform1i_4fdc6d6740375d22, __wbg_uniform4f_19b349303edb7836, __wbg_useProgram_2f4094faf45ecba1, __wbg_vertexAttribPointer_ad370785358334f4, __wbg_viewport_cc41e28a71c23915, __wbg_instanceof_Window_e266f02eee43b570, __wbg_document_950215a728589a2d, __wbg_innerWidth_7e9d12e05bcb598e, __wbg_innerHeight_3ef25a30618357e0, __wbg_devicePixelRatio_5f8f5cab76864090, __wbg_cancelAnimationFrame_d079cdb83bc43b26, __wbg_matchMedia_967e50e4289050fa, __wbg_requestAnimationFrame_afe426b568f84138, __wbg_get_e6ae480a4b8df368, __wbg_clearTimeout_b2b8af0f044e02e9, __wbg_setTimeout_6609c9aa64f32bfc, __wbg_matches_7b5ad9e6bb56f1f3, __wbg_addListener_dfc3f9e430149b14, __wbg_removeListener_6f811d2fb59768b9, __wbg_size_5ce324b99223d189, __wbg_type_979610383a4b7c57, __wbg_name_1e6651aff4fe7a88, __wbg_drawArraysInstancedANGLE_403faa11d52ccf6d, __wbg_drawElementsInstancedANGLE_0230afc27cf9cec9, __wbg_vertexAttribDivisorANGLE_6bbb3df4c6e7d08b, __wbg_setProperty_21e2e7868b86a93e, __wbg_x_0938e87a3ff14a2e, __wbg_y_b881176a43492948, __wbg_pointerId_d2caae4465ba386f, __wbg_pressure_352c13794490720b, __wbg_pointerType_df759fa0bd6634ed, __wbg_deltaX_b7d127c94d6265c0, __wbg_deltaY_b32fa858e16edcc0, __wbg_deltaMode_11f7b19e64d9a515, __wbg_clientX_35f23f953e04ec0e, __wbg_clientY_8104e462abc0b3ec, __wbg_offsetX_413d9f02022e72ad, __wbg_offsetY_488f80a0a9666028, __wbg_ctrlKey_e1b8f1de1eb24d5d, __wbg_shiftKey_fdd99b6df96e25c5, __wbg_altKey_d531a4d3704557cb, __wbg_metaKey_934772989e28020c, __wbg_button_a1c470d5e4c997f2, __wbg_buttons_42a7b7de33d8e572, __wbg_movementX_f4d07f6658c1e16f, __wbg_movementY_30276c1f90aec4fa, __wbg_instanceof_HtmlCanvasElement_f5f69dab93281ebe, __wbg_width_a40e21a22129b197, __wbg_setwidth_81c62bc806e0a727, __wbg_height_98d51321254345a5, __wbg_setheight_98cf0db22c40ef07, __wbg_getContext_89a318b610dc5fd4, __wbg_matches_46e979ff3e4d0811, __wbg_bindVertexArrayOES_688eba003a98a0bb, __wbg_createVertexArrayOES_02cfe655604046eb, __wbg_deleteVertexArrayOES_ba22911f739464a7, __wbg_now_c644db5194be8437, __wbg_drawBuffersWEBGL_dfb0d803ea7ebe07, __wbg_fullscreenElement_65f14a4df7c25129, __wbg_createElement_e2a0e21263eb5416, __wbg_getElementById_eb93a47327bb5585, __wbg_querySelector_32b9d7ebb2df951d, __wbg_getBoundingClientRect_aaa701cbcb448965, __wbg_requestFullscreen_4eee04b9090fa98a, __wbg_setAttribute_79c9562d32d05e66, __wbg_setPointerCapture_5479dc0d082282b7, __wbg_style_2141664e428fef46, __wbg_bufferData_05664df801d7aec0, __wbg_bufferData_023700b2ed207c43, __wbg_bufferSubData_4e653f611d7a962d, __wbg_compressedTexSubImage2D_788296e97b316838, __wbg_readPixels_30de7174c15126d3, __wbg_texSubImage2D_57792696288b0a61, __wbg_uniform2fv_c29ce786946f1aae, __wbg_uniform2iv_58c3d5ee9e70c71d, __wbg_uniform3fv_5ca48b3279e0c643, __wbg_uniform3iv_0a103fe131bd9213, __wbg_uniform4fv_14f1c5ef10bfb4c9, __wbg_uniform4iv_9436eeda2a27cce8, __wbg_uniformMatrix2fv_1a40e9f63b2005c8, __wbg_uniformMatrix3fv_dcde28ba8c34d30e, __wbg_uniformMatrix4fv_4575a018c8188146, __wbg_activeTexture_01d5469eb22c10e7, __wbg_attachShader_14fb12e2ae589dc3, __wbg_bindBuffer_b7c382dcd70e33f6, __wbg_bindFramebuffer_a5ab0ed0463586cb, __wbg_bindRenderbuffer_2d67c879cdbe5ea9, __wbg_bindTexture_c1c0e00507424f8e, __wbg_blendColor_13739d87434b79c3, __wbg_blendEquation_562c3267161e4675, __wbg_blendEquationSeparate_48b95e78f7224be4, __wbg_blendFunc_f4365f78b650180f, __wbg_blendFuncSeparate_b508053691b6ebbe, __wbg_colorMask_99120a2c8caf1298, __wbg_compileShader_4e9130ccbd4a0238, __wbg_copyTexSubImage2D_7c0b0080eece3c1a, __wbg_createBuffer_8c64250e5283611c, __wbg_createFramebuffer_1f943a32c748753e, __wbg_createProgram_28db0ff3cee5f71a, __wbg_createRenderbuffer_a76dcfda7bdc749a, __wbg_createShader_c5fcd8592f47b510, __wbg_createTexture_81fd93af28301e0e, __wbg_cullFace_d4450f8718c6b3eb, __wbg_deleteBuffer_17feed38f3a70ec9, __wbg_deleteFramebuffer_130abca01c89b7d6, __wbg_deleteProgram_dd5f0e2bc555e270, __wbg_deleteRenderbuffer_385f3c9e8759b99e, __wbg_deleteShader_fac9fb3cdefdf6ec, __wbg_deleteTexture_605a36a7e380df5f, __wbg_depthFunc_00d8a905436dc681, __wbg_depthMask_134f9e3073ca4fd0, __wbg_depthRange_f34f19edea1feadd, __wbg_disable_65425605098b79cf, __wbg_disableVertexAttribArray_cf25f8beb5872364, __wbg_drawArrays_e5fa3cfc2b5d7c6d, __wbg_drawElements_a388832eba137ef0, __wbg_enable_2c3b6a4692af9b1b, __wbg_enableVertexAttribArray_6dd3d0668209ae19, __wbg_framebufferRenderbuffer_3bf1420713a0b21a, __wbg_framebufferTexture2D_ed03c0674b9979ce, __wbg_frontFace_00177185d2fae697, __wbg_getActiveUniform_e49dcda694ae15ab, __wbg_getParameter_d6cd2dd2cde656ec, __wbg_getProgramInfoLog_7fd2a7c6c1a280c1, __wbg_getProgramParameter_af1cfcccbbc80f71, __wbg_getShaderInfoLog_d057293074e59c61, __wbg_getShaderParameter_685d7d7092c6bae6, __wbg_getUniformLocation_b46e5db76599a918, __wbg_linkProgram_ca9df3fba2fd4125, __wbg_pixelStorei_f97b971917582269, __wbg_polygonOffset_fb73618b77fd3f6f, __wbg_renderbufferStorage_37eab84be1494aef, __wbg_scissor_8bc2e761846f53f0, __wbg_shaderSource_457e8bc42050401d, __wbg_stencilFuncSeparate_510d3287542b4574, __wbg_stencilMask_e1887eeaabe22771, __wbg_stencilMaskSeparate_e89abefeb5641657, __wbg_stencilOpSeparate_aa3d09aa448a6f48, __wbg_texParameteri_9fbb09bbf9670af4, __wbg_uniform1f_062c683ec584f7e8, __wbg_uniform1i_1f8256271b54cf41, __wbg_uniform4f_68fac972655f5359, __wbg_useProgram_6c9019d05fb8d280, __wbg_vertexAttribPointer_ccabef9be68fe1c4, __wbg_viewport_4bdfc4b8959593ee, __wbg_debug_8db2eed1bf6c1e2a, __wbg_error_fe807da27c4a4ced, __wbg_error_2d344a50ccf38b3b, __wbg_info_9e6db45ac337c3b5, __wbg_log_7bb108d119bafbc1, __wbg_warn_e57696dbb3977030, __wbg_addEventListener_615d4590d38da1c9, __wbg_addEventListener_cf5b03cd29763277, __wbg_removeEventListener_343e3ea9fe4c8533, __wbg_charCode_504e79c3e550d1bb, __wbg_keyCode_b33194be2ceec53b, __wbg_altKey_dff2a075455ac01b, __wbg_ctrlKey_993b558f853d64ce, __wbg_shiftKey_31e62e9d172b26f0, __wbg_metaKey_9f0f19692d0498bd, __wbg_key_f0decac219aa904b, __wbg_code_aed21120de275a12, __wbg_getModifierState_03b72700dbe33ad6, __wbg_appendChild_b8199dc1655c852d, __wbg_target_b629c177f9bee3da, __wbg_cancelBubble_c9a8182589205d54, __wbg_preventDefault_16b2170b12f56317, __wbg_stopPropagation_7647c9985222f9b0, __wbg_get_27fe3dac1c4d0224, __wbg_length_e498fbc24f9c1d4f, __wbg_new_b525de17f44a8943, __wbg_newnoargs_2b8b6bd7753c76ba, __wbg_get_baf4855f9a986186, __wbg_call_95d1ea488d03e4e8, __wbg_new_f9876326328f45ed, __wbg_self_e7c1f827057f6584, __wbg_window_a09ec664e14b1b81, __wbg_globalThis_87cbb8506fecf3a9, __wbg_global_c85a9259e621f3db, __wbindgen_is_undefined, __wbg_of_892d7838f8e4cc20, __wbg_push_49c286f04dd3bf59, __wbg_call_9495de66fdbe016b, __wbg_is_8f1618fe9a4fd388, __wbg_new_9d3a9ce4282a18a8, __wbg_resolve_fd40f858d9db1a04, __wbg_then_ec5db6d509eb475f, __wbg_buffer_cf65c07de34b9a08, __wbg_newwithbyteoffsetandlength_55f9ffb569d9fa74, __wbg_newwithbyteoffsetandlength_f477e654086cbbb6, __wbg_newwithbyteoffsetandlength_b57a602974d4b1cd, __wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5, __wbg_newwithbyteoffsetandlength_9241d9d251418ebf, __wbg_newwithbyteoffsetandlength_5c5a6e21987c3bee, __wbg_newwithbyteoffsetandlength_4078d56428eb2926, __wbg_set_6aa458a4ebdb65cb, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_memory, __wbindgen_closure_wrapper805, __wbindgen_closure_wrapper807, __wbindgen_closure_wrapper809, __wbindgen_closure_wrapper811, __wbindgen_closure_wrapper813, __wbindgen_closure_wrapper815, __wbindgen_closure_wrapper817, __wbindgen_closure_wrapper819, __wbindgen_closure_wrapper821, __wbindgen_closure_wrapper952, __wbindgen_closure_wrapper3709 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_set_wasm", function() { return __wbg_set_wasm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventLoopJs", function() { return EventLoopJs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterfallGraph", function() { return WaterfallGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebglGraph", function() { return WebglGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebgpuGraph", function() { return WebgpuGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebgpuGraphJs", function() { return WebgpuGraphJs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return __wbindgen_object_drop_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_clone_ref", function() { return __wbindgen_object_clone_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_cb_drop", function() { return __wbindgen_cb_drop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_string_new", function() { return __wbindgen_string_new; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_abda76e883ba8a5f", function() { return __wbg_new_abda76e883ba8a5f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_stack_658279fe44541cf6", function() { return __wbg_stack_658279fe44541cf6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_f851667af71bcfc6", function() { return __wbg_error_f851667af71bcfc6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_string_get", function() { return __wbindgen_string_get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_boolean_get", function() { return __wbindgen_boolean_get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_number_get", function() { return __wbindgen_number_get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_number_new", function() { return __wbindgen_number_new; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_WebGl2RenderingContext_61bb2cb23346dbb7", function() { return __wbg_instanceof_WebGl2RenderingContext_61bb2cb23346dbb7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_beginQuery_fb152d8d84f2b130", function() { return __wbg_beginQuery_fb152d8d84f2b130; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindBufferRange_f2c529259df5358e", function() { return __wbg_bindBufferRange_f2c529259df5358e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindSampler_6eb88b542e5a410f", function() { return __wbg_bindSampler_6eb88b542e5a410f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindVertexArray_8b71290041cb6746", function() { return __wbg_bindVertexArray_8b71290041cb6746; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_blitFramebuffer_86eee8a5763ded5e", function() { return __wbg_blitFramebuffer_86eee8a5763ded5e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bufferData_573e61c49a480c4d", function() { return __wbg_bufferData_573e61c49a480c4d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bufferData_16f948547d74c866", function() { return __wbg_bufferData_16f948547d74c866; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bufferSubData_c7180c0b681078e8", function() { return __wbg_bufferSubData_c7180c0b681078e8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_clearBufferfi_95daf829c568e58a", function() { return __wbg_clearBufferfi_95daf829c568e58a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_clearBufferfv_b3c90fbed3b74920", function() { return __wbg_clearBufferfv_b3c90fbed3b74920; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_clearBufferiv_fe2a00a8f8fb7322", function() { return __wbg_clearBufferiv_fe2a00a8f8fb7322; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_clearBufferuiv_a41730a8d84c6ac6", function() { return __wbg_clearBufferuiv_a41730a8d84c6ac6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_clientWaitSync_ae8f3712f85a57fb", function() { return __wbg_clientWaitSync_ae8f3712f85a57fb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_compressedTexSubImage2D_23b602b828848fb7", function() { return __wbg_compressedTexSubImage2D_23b602b828848fb7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_compressedTexSubImage2D_d6c95fc640a9f4de", function() { return __wbg_compressedTexSubImage2D_d6c95fc640a9f4de; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_compressedTexSubImage3D_00b794917e65d559", function() { return __wbg_compressedTexSubImage3D_00b794917e65d559; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_compressedTexSubImage3D_c9c7b42e0f7db586", function() { return __wbg_compressedTexSubImage3D_c9c7b42e0f7db586; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_copyBufferSubData_c903618a0e0a9fca", function() { return __wbg_copyBufferSubData_c903618a0e0a9fca; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_copyTexSubImage3D_88fc9e1c56d3e7db", function() { return __wbg_copyTexSubImage3D_88fc9e1c56d3e7db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createSampler_d1255ae3836b1bee", function() { return __wbg_createSampler_d1255ae3836b1bee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createVertexArray_de7292bbd7ea02dd", function() { return __wbg_createVertexArray_de7292bbd7ea02dd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteQuery_0981fb4d492e46a7", function() { return __wbg_deleteQuery_0981fb4d492e46a7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteSampler_6d832d1900eafbea", function() { return __wbg_deleteSampler_6d832d1900eafbea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteSync_f8f026807b7eee54", function() { return __wbg_deleteSync_f8f026807b7eee54; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteVertexArray_dc4f1b2e5ac93f24", function() { return __wbg_deleteVertexArray_dc4f1b2e5ac93f24; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawArraysInstanced_1222b6236d008088", function() { return __wbg_drawArraysInstanced_1222b6236d008088; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawBuffers_3223f0aeb44f7057", function() { return __wbg_drawBuffers_3223f0aeb44f7057; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawElementsInstanced_b4714f8dd90fd2a8", function() { return __wbg_drawElementsInstanced_b4714f8dd90fd2a8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_endQuery_726967da9d5d1ca7", function() { return __wbg_endQuery_726967da9d5d1ca7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_fenceSync_fb3e1185847ee462", function() { return __wbg_fenceSync_fb3e1185847ee462; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_framebufferTextureLayer_e644333b8ec36f9d", function() { return __wbg_framebufferTextureLayer_e644333b8ec36f9d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getBufferSubData_cd8138c86821bca3", function() { return __wbg_getBufferSubData_cd8138c86821bca3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getIndexedParameter_5f5c79f6c05edd18", function() { return __wbg_getIndexedParameter_5f5c79f6c05edd18; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getQueryParameter_e0f43fb85f793bbe", function() { return __wbg_getQueryParameter_e0f43fb85f793bbe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getSyncParameter_b2f55318719e958c", function() { return __wbg_getSyncParameter_b2f55318719e958c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getUniformBlockIndex_a05b0c144aa49817", function() { return __wbg_getUniformBlockIndex_a05b0c144aa49817; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_invalidateFramebuffer_696c3c456c34a207", function() { return __wbg_invalidateFramebuffer_696c3c456c34a207; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_readBuffer_bade27c1171e00cf", function() { return __wbg_readBuffer_bade27c1171e00cf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_readPixels_493558abd28a3b61", function() { return __wbg_readPixels_493558abd28a3b61; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_readPixels_92102ee9fe1c81a0", function() { return __wbg_readPixels_92102ee9fe1c81a0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_renderbufferStorageMultisample_9cb173d2fd461513", function() { return __wbg_renderbufferStorageMultisample_9cb173d2fd461513; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_samplerParameterf_38ca759dc5c40461", function() { return __wbg_samplerParameterf_38ca759dc5c40461; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_samplerParameteri_c631c02ceefc6dc1", function() { return __wbg_samplerParameteri_c631c02ceefc6dc1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_texStorage2D_89c29252632da923", function() { return __wbg_texStorage2D_89c29252632da923; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_texStorage3D_3897fb6b91eb82d8", function() { return __wbg_texStorage3D_3897fb6b91eb82d8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_texSubImage2D_6a8b0f3381d734c3", function() { return __wbg_texSubImage2D_6a8b0f3381d734c3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_texSubImage2D_53b6a050a0b9b24e", function() { return __wbg_texSubImage2D_53b6a050a0b9b24e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_texSubImage3D_84ef903e11598af0", function() { return __wbg_texSubImage3D_84ef903e11598af0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_texSubImage3D_1d82135e9ce965bf", function() { return __wbg_texSubImage3D_1d82135e9ce965bf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform2fv_ffd0b1d3c3a4070a", function() { return __wbg_uniform2fv_ffd0b1d3c3a4070a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform2iv_32329f9a4d491136", function() { return __wbg_uniform2iv_32329f9a4d491136; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform3fv_bc831e48acb2c057", function() { return __wbg_uniform3fv_bc831e48acb2c057; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform3iv_100a284f5a3cbca5", function() { return __wbg_uniform3iv_100a284f5a3cbca5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform4fv_26d822da5c3fdb00", function() { return __wbg_uniform4fv_26d822da5c3fdb00; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform4iv_7f03c41e6e49bbd6", function() { return __wbg_uniform4iv_7f03c41e6e49bbd6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniformBlockBinding_1971f4528d9c3043", function() { return __wbg_uniformBlockBinding_1971f4528d9c3043; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniformMatrix2fv_5f1f56c7cbfb533f", function() { return __wbg_uniformMatrix2fv_5f1f56c7cbfb533f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniformMatrix3fv_ae9271db8127a57b", function() { return __wbg_uniformMatrix3fv_ae9271db8127a57b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniformMatrix4fv_0f42d678a568ded9", function() { return __wbg_uniformMatrix4fv_0f42d678a568ded9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_vertexAttribDivisor_77f020121066a4d9", function() { return __wbg_vertexAttribDivisor_77f020121066a4d9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_vertexAttribIPointer_b15ad1437a268cf5", function() { return __wbg_vertexAttribIPointer_b15ad1437a268cf5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_activeTexture_0daf7c1698e49f00", function() { return __wbg_activeTexture_0daf7c1698e49f00; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_attachShader_3038234860d2d59d", function() { return __wbg_attachShader_3038234860d2d59d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindBuffer_9cb064991696b79f", function() { return __wbg_bindBuffer_9cb064991696b79f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindFramebuffer_0522db2a250c29f0", function() { return __wbg_bindFramebuffer_0522db2a250c29f0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindRenderbuffer_1e4928d9bf839c02", function() { return __wbg_bindRenderbuffer_1e4928d9bf839c02; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindTexture_0c284b1604ba527c", function() { return __wbg_bindTexture_0c284b1604ba527c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendColor_a17ddceb3534e0b3", function() { return __wbg_blendColor_a17ddceb3534e0b3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendEquation_b5d5be767bd3835a", function() { return __wbg_blendEquation_b5d5be767bd3835a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendEquationSeparate_d2fa3b718ee3579f", function() { return __wbg_blendEquationSeparate_d2fa3b718ee3579f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendFunc_d456b0c766f8dbc9", function() { return __wbg_blendFunc_d456b0c766f8dbc9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendFuncSeparate_9a7146974b3cd76d", function() { return __wbg_blendFuncSeparate_9a7146974b3cd76d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_colorMask_a7f067283ed312c9", function() { return __wbg_colorMask_a7f067283ed312c9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_compileShader_af777dd3b15798b3", function() { return __wbg_compileShader_af777dd3b15798b3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_copyTexSubImage2D_47b14ff8459fd4c8", function() { return __wbg_copyTexSubImage2D_47b14ff8459fd4c8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createBuffer_5ed0554ab35780b5", function() { return __wbg_createBuffer_5ed0554ab35780b5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createFramebuffer_86883935c13ddd59", function() { return __wbg_createFramebuffer_86883935c13ddd59; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createProgram_7d25c1dd3bb0ce39", function() { return __wbg_createProgram_7d25c1dd3bb0ce39; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createRenderbuffer_b392324e044d389a", function() { return __wbg_createRenderbuffer_b392324e044d389a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createShader_96339db58713e350", function() { return __wbg_createShader_96339db58713e350; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createTexture_c651f9e28d1ce9d2", function() { return __wbg_createTexture_c651f9e28d1ce9d2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_cullFace_79e4ddbea13278b3", function() { return __wbg_cullFace_79e4ddbea13278b3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteBuffer_cf67a696a7857b3f", function() { return __wbg_deleteBuffer_cf67a696a7857b3f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteFramebuffer_f9c2bceeb5422d9d", function() { return __wbg_deleteFramebuffer_f9c2bceeb5422d9d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteProgram_9c8fa1ef341cb01d", function() { return __wbg_deleteProgram_9c8fa1ef341cb01d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteRenderbuffer_cad502ac8d1398f2", function() { return __wbg_deleteRenderbuffer_cad502ac8d1398f2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteShader_f48f72524f5ee3ed", function() { return __wbg_deleteShader_f48f72524f5ee3ed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteTexture_1b5f5e536e0d5545", function() { return __wbg_deleteTexture_1b5f5e536e0d5545; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_depthFunc_2060ec3687ac1f95", function() { return __wbg_depthFunc_2060ec3687ac1f95; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_depthMask_27d367443a80541d", function() { return __wbg_depthMask_27d367443a80541d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_depthRange_7109c2393819a37b", function() { return __wbg_depthRange_7109c2393819a37b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_disable_3adb8645ea1d92d4", function() { return __wbg_disable_3adb8645ea1d92d4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_disableVertexAttribArray_f469283fda607cee", function() { return __wbg_disableVertexAttribArray_f469283fda607cee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawArrays_84de8a2416396807", function() { return __wbg_drawArrays_84de8a2416396807; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawElements_dcb8df9c52e2bbd5", function() { return __wbg_drawElements_dcb8df9c52e2bbd5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_enable_1ac9f14a577b7c8b", function() { return __wbg_enable_1ac9f14a577b7c8b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_enableVertexAttribArray_53139716d9c95dba", function() { return __wbg_enableVertexAttribArray_53139716d9c95dba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_framebufferRenderbuffer_77bdb2f359a5728f", function() { return __wbg_framebufferRenderbuffer_77bdb2f359a5728f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_framebufferTexture2D_885176f16a153fec", function() { return __wbg_framebufferTexture2D_885176f16a153fec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_frontFace_3d7784c56ffede8a", function() { return __wbg_frontFace_3d7784c56ffede8a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getActiveUniform_9c4ac7c1ccf5f894", function() { return __wbg_getActiveUniform_9c4ac7c1ccf5f894; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getExtension_f0070583175271d4", function() { return __wbg_getExtension_f0070583175271d4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getParameter_56d47f9b55e463d4", function() { return __wbg_getParameter_56d47f9b55e463d4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getProgramInfoLog_7654794297967ac0", function() { return __wbg_getProgramInfoLog_7654794297967ac0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getProgramParameter_5b1a40917aa850f8", function() { return __wbg_getProgramParameter_5b1a40917aa850f8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getShaderInfoLog_915d0e8506c11159", function() { return __wbg_getShaderInfoLog_915d0e8506c11159; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getShaderParameter_f9240892c9e7a0a3", function() { return __wbg_getShaderParameter_f9240892c9e7a0a3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getSupportedExtensions_7af8f7bbdd4d7b2c", function() { return __wbg_getSupportedExtensions_7af8f7bbdd4d7b2c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getUniformLocation_c6caabb349b43da7", function() { return __wbg_getUniformLocation_c6caabb349b43da7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_linkProgram_2d5cc584654696b8", function() { return __wbg_linkProgram_2d5cc584654696b8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_pixelStorei_a0b83efc92cd29fe", function() { return __wbg_pixelStorei_a0b83efc92cd29fe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_polygonOffset_03d3955d5a1afa08", function() { return __wbg_polygonOffset_03d3955d5a1afa08; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_renderbufferStorage_2192d9cd09128339", function() { return __wbg_renderbufferStorage_2192d9cd09128339; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_scissor_2b084e0dc81d67f4", function() { return __wbg_scissor_2b084e0dc81d67f4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_shaderSource_57883245cdfb0dca", function() { return __wbg_shaderSource_57883245cdfb0dca; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_stencilFuncSeparate_3be68afd7ca6efcc", function() { return __wbg_stencilFuncSeparate_3be68afd7ca6efcc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_stencilMask_144b86d15d9fdbe6", function() { return __wbg_stencilMask_144b86d15d9fdbe6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_stencilMaskSeparate_84a2494b967772c7", function() { return __wbg_stencilMaskSeparate_84a2494b967772c7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_stencilOpSeparate_1708aea1aea0dc48", function() { return __wbg_stencilOpSeparate_1708aea1aea0dc48; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_texParameteri_e0ce3810261e0864", function() { return __wbg_texParameteri_e0ce3810261e0864; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform1f_dcc6951bde745417", function() { return __wbg_uniform1f_dcc6951bde745417; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform1i_4fdc6d6740375d22", function() { return __wbg_uniform1i_4fdc6d6740375d22; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform4f_19b349303edb7836", function() { return __wbg_uniform4f_19b349303edb7836; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_useProgram_2f4094faf45ecba1", function() { return __wbg_useProgram_2f4094faf45ecba1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_vertexAttribPointer_ad370785358334f4", function() { return __wbg_vertexAttribPointer_ad370785358334f4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_viewport_cc41e28a71c23915", function() { return __wbg_viewport_cc41e28a71c23915; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_Window_e266f02eee43b570", function() { return __wbg_instanceof_Window_e266f02eee43b570; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_document_950215a728589a2d", function() { return __wbg_document_950215a728589a2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_innerWidth_7e9d12e05bcb598e", function() { return __wbg_innerWidth_7e9d12e05bcb598e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_innerHeight_3ef25a30618357e0", function() { return __wbg_innerHeight_3ef25a30618357e0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_devicePixelRatio_5f8f5cab76864090", function() { return __wbg_devicePixelRatio_5f8f5cab76864090; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_cancelAnimationFrame_d079cdb83bc43b26", function() { return __wbg_cancelAnimationFrame_d079cdb83bc43b26; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_matchMedia_967e50e4289050fa", function() { return __wbg_matchMedia_967e50e4289050fa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_requestAnimationFrame_afe426b568f84138", function() { return __wbg_requestAnimationFrame_afe426b568f84138; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_get_e6ae480a4b8df368", function() { return __wbg_get_e6ae480a4b8df368; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_clearTimeout_b2b8af0f044e02e9", function() { return __wbg_clearTimeout_b2b8af0f044e02e9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setTimeout_6609c9aa64f32bfc", function() { return __wbg_setTimeout_6609c9aa64f32bfc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_matches_7b5ad9e6bb56f1f3", function() { return __wbg_matches_7b5ad9e6bb56f1f3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_addListener_dfc3f9e430149b14", function() { return __wbg_addListener_dfc3f9e430149b14; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_removeListener_6f811d2fb59768b9", function() { return __wbg_removeListener_6f811d2fb59768b9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_size_5ce324b99223d189", function() { return __wbg_size_5ce324b99223d189; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_type_979610383a4b7c57", function() { return __wbg_type_979610383a4b7c57; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_name_1e6651aff4fe7a88", function() { return __wbg_name_1e6651aff4fe7a88; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawArraysInstancedANGLE_403faa11d52ccf6d", function() { return __wbg_drawArraysInstancedANGLE_403faa11d52ccf6d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawElementsInstancedANGLE_0230afc27cf9cec9", function() { return __wbg_drawElementsInstancedANGLE_0230afc27cf9cec9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_vertexAttribDivisorANGLE_6bbb3df4c6e7d08b", function() { return __wbg_vertexAttribDivisorANGLE_6bbb3df4c6e7d08b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setProperty_21e2e7868b86a93e", function() { return __wbg_setProperty_21e2e7868b86a93e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_x_0938e87a3ff14a2e", function() { return __wbg_x_0938e87a3ff14a2e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_y_b881176a43492948", function() { return __wbg_y_b881176a43492948; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_pointerId_d2caae4465ba386f", function() { return __wbg_pointerId_d2caae4465ba386f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_pressure_352c13794490720b", function() { return __wbg_pressure_352c13794490720b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_pointerType_df759fa0bd6634ed", function() { return __wbg_pointerType_df759fa0bd6634ed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deltaX_b7d127c94d6265c0", function() { return __wbg_deltaX_b7d127c94d6265c0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deltaY_b32fa858e16edcc0", function() { return __wbg_deltaY_b32fa858e16edcc0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deltaMode_11f7b19e64d9a515", function() { return __wbg_deltaMode_11f7b19e64d9a515; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_clientX_35f23f953e04ec0e", function() { return __wbg_clientX_35f23f953e04ec0e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_clientY_8104e462abc0b3ec", function() { return __wbg_clientY_8104e462abc0b3ec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_offsetX_413d9f02022e72ad", function() { return __wbg_offsetX_413d9f02022e72ad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_offsetY_488f80a0a9666028", function() { return __wbg_offsetY_488f80a0a9666028; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_ctrlKey_e1b8f1de1eb24d5d", function() { return __wbg_ctrlKey_e1b8f1de1eb24d5d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_shiftKey_fdd99b6df96e25c5", function() { return __wbg_shiftKey_fdd99b6df96e25c5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_altKey_d531a4d3704557cb", function() { return __wbg_altKey_d531a4d3704557cb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_metaKey_934772989e28020c", function() { return __wbg_metaKey_934772989e28020c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_button_a1c470d5e4c997f2", function() { return __wbg_button_a1c470d5e4c997f2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_buttons_42a7b7de33d8e572", function() { return __wbg_buttons_42a7b7de33d8e572; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_movementX_f4d07f6658c1e16f", function() { return __wbg_movementX_f4d07f6658c1e16f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_movementY_30276c1f90aec4fa", function() { return __wbg_movementY_30276c1f90aec4fa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_HtmlCanvasElement_f5f69dab93281ebe", function() { return __wbg_instanceof_HtmlCanvasElement_f5f69dab93281ebe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_width_a40e21a22129b197", function() { return __wbg_width_a40e21a22129b197; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setwidth_81c62bc806e0a727", function() { return __wbg_setwidth_81c62bc806e0a727; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_height_98d51321254345a5", function() { return __wbg_height_98d51321254345a5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setheight_98cf0db22c40ef07", function() { return __wbg_setheight_98cf0db22c40ef07; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getContext_89a318b610dc5fd4", function() { return __wbg_getContext_89a318b610dc5fd4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_matches_46e979ff3e4d0811", function() { return __wbg_matches_46e979ff3e4d0811; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindVertexArrayOES_688eba003a98a0bb", function() { return __wbg_bindVertexArrayOES_688eba003a98a0bb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createVertexArrayOES_02cfe655604046eb", function() { return __wbg_createVertexArrayOES_02cfe655604046eb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteVertexArrayOES_ba22911f739464a7", function() { return __wbg_deleteVertexArrayOES_ba22911f739464a7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_now_c644db5194be8437", function() { return __wbg_now_c644db5194be8437; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawBuffersWEBGL_dfb0d803ea7ebe07", function() { return __wbg_drawBuffersWEBGL_dfb0d803ea7ebe07; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_fullscreenElement_65f14a4df7c25129", function() { return __wbg_fullscreenElement_65f14a4df7c25129; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createElement_e2a0e21263eb5416", function() { return __wbg_createElement_e2a0e21263eb5416; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getElementById_eb93a47327bb5585", function() { return __wbg_getElementById_eb93a47327bb5585; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_querySelector_32b9d7ebb2df951d", function() { return __wbg_querySelector_32b9d7ebb2df951d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getBoundingClientRect_aaa701cbcb448965", function() { return __wbg_getBoundingClientRect_aaa701cbcb448965; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_requestFullscreen_4eee04b9090fa98a", function() { return __wbg_requestFullscreen_4eee04b9090fa98a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setAttribute_79c9562d32d05e66", function() { return __wbg_setAttribute_79c9562d32d05e66; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setPointerCapture_5479dc0d082282b7", function() { return __wbg_setPointerCapture_5479dc0d082282b7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_style_2141664e428fef46", function() { return __wbg_style_2141664e428fef46; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bufferData_05664df801d7aec0", function() { return __wbg_bufferData_05664df801d7aec0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bufferData_023700b2ed207c43", function() { return __wbg_bufferData_023700b2ed207c43; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bufferSubData_4e653f611d7a962d", function() { return __wbg_bufferSubData_4e653f611d7a962d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_compressedTexSubImage2D_788296e97b316838", function() { return __wbg_compressedTexSubImage2D_788296e97b316838; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_readPixels_30de7174c15126d3", function() { return __wbg_readPixels_30de7174c15126d3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_texSubImage2D_57792696288b0a61", function() { return __wbg_texSubImage2D_57792696288b0a61; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform2fv_c29ce786946f1aae", function() { return __wbg_uniform2fv_c29ce786946f1aae; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform2iv_58c3d5ee9e70c71d", function() { return __wbg_uniform2iv_58c3d5ee9e70c71d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform3fv_5ca48b3279e0c643", function() { return __wbg_uniform3fv_5ca48b3279e0c643; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform3iv_0a103fe131bd9213", function() { return __wbg_uniform3iv_0a103fe131bd9213; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform4fv_14f1c5ef10bfb4c9", function() { return __wbg_uniform4fv_14f1c5ef10bfb4c9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform4iv_9436eeda2a27cce8", function() { return __wbg_uniform4iv_9436eeda2a27cce8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniformMatrix2fv_1a40e9f63b2005c8", function() { return __wbg_uniformMatrix2fv_1a40e9f63b2005c8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniformMatrix3fv_dcde28ba8c34d30e", function() { return __wbg_uniformMatrix3fv_dcde28ba8c34d30e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniformMatrix4fv_4575a018c8188146", function() { return __wbg_uniformMatrix4fv_4575a018c8188146; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_activeTexture_01d5469eb22c10e7", function() { return __wbg_activeTexture_01d5469eb22c10e7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_attachShader_14fb12e2ae589dc3", function() { return __wbg_attachShader_14fb12e2ae589dc3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindBuffer_b7c382dcd70e33f6", function() { return __wbg_bindBuffer_b7c382dcd70e33f6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindFramebuffer_a5ab0ed0463586cb", function() { return __wbg_bindFramebuffer_a5ab0ed0463586cb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindRenderbuffer_2d67c879cdbe5ea9", function() { return __wbg_bindRenderbuffer_2d67c879cdbe5ea9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindTexture_c1c0e00507424f8e", function() { return __wbg_bindTexture_c1c0e00507424f8e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendColor_13739d87434b79c3", function() { return __wbg_blendColor_13739d87434b79c3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendEquation_562c3267161e4675", function() { return __wbg_blendEquation_562c3267161e4675; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendEquationSeparate_48b95e78f7224be4", function() { return __wbg_blendEquationSeparate_48b95e78f7224be4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendFunc_f4365f78b650180f", function() { return __wbg_blendFunc_f4365f78b650180f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendFuncSeparate_b508053691b6ebbe", function() { return __wbg_blendFuncSeparate_b508053691b6ebbe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_colorMask_99120a2c8caf1298", function() { return __wbg_colorMask_99120a2c8caf1298; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_compileShader_4e9130ccbd4a0238", function() { return __wbg_compileShader_4e9130ccbd4a0238; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_copyTexSubImage2D_7c0b0080eece3c1a", function() { return __wbg_copyTexSubImage2D_7c0b0080eece3c1a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createBuffer_8c64250e5283611c", function() { return __wbg_createBuffer_8c64250e5283611c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createFramebuffer_1f943a32c748753e", function() { return __wbg_createFramebuffer_1f943a32c748753e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createProgram_28db0ff3cee5f71a", function() { return __wbg_createProgram_28db0ff3cee5f71a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createRenderbuffer_a76dcfda7bdc749a", function() { return __wbg_createRenderbuffer_a76dcfda7bdc749a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createShader_c5fcd8592f47b510", function() { return __wbg_createShader_c5fcd8592f47b510; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createTexture_81fd93af28301e0e", function() { return __wbg_createTexture_81fd93af28301e0e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_cullFace_d4450f8718c6b3eb", function() { return __wbg_cullFace_d4450f8718c6b3eb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteBuffer_17feed38f3a70ec9", function() { return __wbg_deleteBuffer_17feed38f3a70ec9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteFramebuffer_130abca01c89b7d6", function() { return __wbg_deleteFramebuffer_130abca01c89b7d6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteProgram_dd5f0e2bc555e270", function() { return __wbg_deleteProgram_dd5f0e2bc555e270; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteRenderbuffer_385f3c9e8759b99e", function() { return __wbg_deleteRenderbuffer_385f3c9e8759b99e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteShader_fac9fb3cdefdf6ec", function() { return __wbg_deleteShader_fac9fb3cdefdf6ec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteTexture_605a36a7e380df5f", function() { return __wbg_deleteTexture_605a36a7e380df5f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_depthFunc_00d8a905436dc681", function() { return __wbg_depthFunc_00d8a905436dc681; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_depthMask_134f9e3073ca4fd0", function() { return __wbg_depthMask_134f9e3073ca4fd0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_depthRange_f34f19edea1feadd", function() { return __wbg_depthRange_f34f19edea1feadd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_disable_65425605098b79cf", function() { return __wbg_disable_65425605098b79cf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_disableVertexAttribArray_cf25f8beb5872364", function() { return __wbg_disableVertexAttribArray_cf25f8beb5872364; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawArrays_e5fa3cfc2b5d7c6d", function() { return __wbg_drawArrays_e5fa3cfc2b5d7c6d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawElements_a388832eba137ef0", function() { return __wbg_drawElements_a388832eba137ef0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_enable_2c3b6a4692af9b1b", function() { return __wbg_enable_2c3b6a4692af9b1b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_enableVertexAttribArray_6dd3d0668209ae19", function() { return __wbg_enableVertexAttribArray_6dd3d0668209ae19; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_framebufferRenderbuffer_3bf1420713a0b21a", function() { return __wbg_framebufferRenderbuffer_3bf1420713a0b21a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_framebufferTexture2D_ed03c0674b9979ce", function() { return __wbg_framebufferTexture2D_ed03c0674b9979ce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_frontFace_00177185d2fae697", function() { return __wbg_frontFace_00177185d2fae697; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getActiveUniform_e49dcda694ae15ab", function() { return __wbg_getActiveUniform_e49dcda694ae15ab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getParameter_d6cd2dd2cde656ec", function() { return __wbg_getParameter_d6cd2dd2cde656ec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getProgramInfoLog_7fd2a7c6c1a280c1", function() { return __wbg_getProgramInfoLog_7fd2a7c6c1a280c1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getProgramParameter_af1cfcccbbc80f71", function() { return __wbg_getProgramParameter_af1cfcccbbc80f71; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getShaderInfoLog_d057293074e59c61", function() { return __wbg_getShaderInfoLog_d057293074e59c61; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getShaderParameter_685d7d7092c6bae6", function() { return __wbg_getShaderParameter_685d7d7092c6bae6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getUniformLocation_b46e5db76599a918", function() { return __wbg_getUniformLocation_b46e5db76599a918; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_linkProgram_ca9df3fba2fd4125", function() { return __wbg_linkProgram_ca9df3fba2fd4125; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_pixelStorei_f97b971917582269", function() { return __wbg_pixelStorei_f97b971917582269; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_polygonOffset_fb73618b77fd3f6f", function() { return __wbg_polygonOffset_fb73618b77fd3f6f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_renderbufferStorage_37eab84be1494aef", function() { return __wbg_renderbufferStorage_37eab84be1494aef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_scissor_8bc2e761846f53f0", function() { return __wbg_scissor_8bc2e761846f53f0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_shaderSource_457e8bc42050401d", function() { return __wbg_shaderSource_457e8bc42050401d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_stencilFuncSeparate_510d3287542b4574", function() { return __wbg_stencilFuncSeparate_510d3287542b4574; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_stencilMask_e1887eeaabe22771", function() { return __wbg_stencilMask_e1887eeaabe22771; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_stencilMaskSeparate_e89abefeb5641657", function() { return __wbg_stencilMaskSeparate_e89abefeb5641657; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_stencilOpSeparate_aa3d09aa448a6f48", function() { return __wbg_stencilOpSeparate_aa3d09aa448a6f48; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_texParameteri_9fbb09bbf9670af4", function() { return __wbg_texParameteri_9fbb09bbf9670af4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform1f_062c683ec584f7e8", function() { return __wbg_uniform1f_062c683ec584f7e8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform1i_1f8256271b54cf41", function() { return __wbg_uniform1i_1f8256271b54cf41; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform4f_68fac972655f5359", function() { return __wbg_uniform4f_68fac972655f5359; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_useProgram_6c9019d05fb8d280", function() { return __wbg_useProgram_6c9019d05fb8d280; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_vertexAttribPointer_ccabef9be68fe1c4", function() { return __wbg_vertexAttribPointer_ccabef9be68fe1c4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_viewport_4bdfc4b8959593ee", function() { return __wbg_viewport_4bdfc4b8959593ee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_debug_8db2eed1bf6c1e2a", function() { return __wbg_debug_8db2eed1bf6c1e2a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_fe807da27c4a4ced", function() { return __wbg_error_fe807da27c4a4ced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_2d344a50ccf38b3b", function() { return __wbg_error_2d344a50ccf38b3b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_info_9e6db45ac337c3b5", function() { return __wbg_info_9e6db45ac337c3b5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_log_7bb108d119bafbc1", function() { return __wbg_log_7bb108d119bafbc1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_warn_e57696dbb3977030", function() { return __wbg_warn_e57696dbb3977030; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_addEventListener_615d4590d38da1c9", function() { return __wbg_addEventListener_615d4590d38da1c9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_addEventListener_cf5b03cd29763277", function() { return __wbg_addEventListener_cf5b03cd29763277; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_removeEventListener_343e3ea9fe4c8533", function() { return __wbg_removeEventListener_343e3ea9fe4c8533; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_charCode_504e79c3e550d1bb", function() { return __wbg_charCode_504e79c3e550d1bb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_keyCode_b33194be2ceec53b", function() { return __wbg_keyCode_b33194be2ceec53b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_altKey_dff2a075455ac01b", function() { return __wbg_altKey_dff2a075455ac01b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_ctrlKey_993b558f853d64ce", function() { return __wbg_ctrlKey_993b558f853d64ce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_shiftKey_31e62e9d172b26f0", function() { return __wbg_shiftKey_31e62e9d172b26f0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_metaKey_9f0f19692d0498bd", function() { return __wbg_metaKey_9f0f19692d0498bd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_key_f0decac219aa904b", function() { return __wbg_key_f0decac219aa904b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_code_aed21120de275a12", function() { return __wbg_code_aed21120de275a12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getModifierState_03b72700dbe33ad6", function() { return __wbg_getModifierState_03b72700dbe33ad6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_appendChild_b8199dc1655c852d", function() { return __wbg_appendChild_b8199dc1655c852d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_target_b629c177f9bee3da", function() { return __wbg_target_b629c177f9bee3da; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_cancelBubble_c9a8182589205d54", function() { return __wbg_cancelBubble_c9a8182589205d54; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_preventDefault_16b2170b12f56317", function() { return __wbg_preventDefault_16b2170b12f56317; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_stopPropagation_7647c9985222f9b0", function() { return __wbg_stopPropagation_7647c9985222f9b0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_get_27fe3dac1c4d0224", function() { return __wbg_get_27fe3dac1c4d0224; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_length_e498fbc24f9c1d4f", function() { return __wbg_length_e498fbc24f9c1d4f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_b525de17f44a8943", function() { return __wbg_new_b525de17f44a8943; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newnoargs_2b8b6bd7753c76ba", function() { return __wbg_newnoargs_2b8b6bd7753c76ba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_get_baf4855f9a986186", function() { return __wbg_get_baf4855f9a986186; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_95d1ea488d03e4e8", function() { return __wbg_call_95d1ea488d03e4e8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_f9876326328f45ed", function() { return __wbg_new_f9876326328f45ed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_self_e7c1f827057f6584", function() { return __wbg_self_e7c1f827057f6584; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_window_a09ec664e14b1b81", function() { return __wbg_window_a09ec664e14b1b81; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_globalThis_87cbb8506fecf3a9", function() { return __wbg_globalThis_87cbb8506fecf3a9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_global_c85a9259e621f3db", function() { return __wbg_global_c85a9259e621f3db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_is_undefined", function() { return __wbindgen_is_undefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_of_892d7838f8e4cc20", function() { return __wbg_of_892d7838f8e4cc20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_push_49c286f04dd3bf59", function() { return __wbg_push_49c286f04dd3bf59; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_9495de66fdbe016b", function() { return __wbg_call_9495de66fdbe016b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_is_8f1618fe9a4fd388", function() { return __wbg_is_8f1618fe9a4fd388; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_9d3a9ce4282a18a8", function() { return __wbg_new_9d3a9ce4282a18a8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_resolve_fd40f858d9db1a04", function() { return __wbg_resolve_fd40f858d9db1a04; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_then_ec5db6d509eb475f", function() { return __wbg_then_ec5db6d509eb475f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_buffer_cf65c07de34b9a08", function() { return __wbg_buffer_cf65c07de34b9a08; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_55f9ffb569d9fa74", function() { return __wbg_newwithbyteoffsetandlength_55f9ffb569d9fa74; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_f477e654086cbbb6", function() { return __wbg_newwithbyteoffsetandlength_f477e654086cbbb6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_b57a602974d4b1cd", function() { return __wbg_newwithbyteoffsetandlength_b57a602974d4b1cd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5", function() { return __wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_9241d9d251418ebf", function() { return __wbg_newwithbyteoffsetandlength_9241d9d251418ebf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_5c5a6e21987c3bee", function() { return __wbg_newwithbyteoffsetandlength_5c5a6e21987c3bee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_4078d56428eb2926", function() { return __wbg_newwithbyteoffsetandlength_4078d56428eb2926; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_set_6aa458a4ebdb65cb", function() { return __wbg_set_6aa458a4ebdb65cb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_debug_string", function() { return __wbindgen_debug_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return __wbindgen_throw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_memory", function() { return __wbindgen_memory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper805", function() { return __wbindgen_closure_wrapper805; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper807", function() { return __wbindgen_closure_wrapper807; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper809", function() { return __wbindgen_closure_wrapper809; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper811", function() { return __wbindgen_closure_wrapper811; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper813", function() { return __wbindgen_closure_wrapper813; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper815", function() { return __wbindgen_closure_wrapper815; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper817", function() { return __wbindgen_closure_wrapper817; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper819", function() { return __wbindgen_closure_wrapper819; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper821", function() { return __wbindgen_closure_wrapper821; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper952", function() { return __wbindgen_closure_wrapper952; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper3709", function() { return __wbindgen_closure_wrapper3709; });
let wasm;
function __wbg_set_wasm(val) {
    wasm = val;
}


const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

let cachedFloat64Memory0 = null;

function getFloat64Memory0() {
    if (cachedFloat64Memory0 === null || cachedFloat64Memory0.byteLength === 0) {
        cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachedFloat64Memory0;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);

            } else {
                state.a = a;
            }
        }
    };
    real.original = state;

    return real;
}
function __wbg_adapter_26(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0d6d4a2aa4e305aa(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_43(arg0, arg1) {
    wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3fe02e25275af17e(arg0, arg1);
}

function __wbg_adapter_46(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h837946e50862391f(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_49(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hb90c4e155ca8d91e(arg0, arg1, addHeapObject(arg2));
}

let cachedFloat32Memory0 = null;

function getFloat32Memory0() {
    if (cachedFloat32Memory0 === null || cachedFloat32Memory0.byteLength === 0) {
        cachedFloat32Memory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32Memory0;
}

function getArrayF32FromWasm0(ptr, len) {
    return getFloat32Memory0().subarray(ptr / 4, ptr / 4 + len);
}

function passArrayF32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4);
    getFloat32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}

function getArrayI32FromWasm0(ptr, len) {
    return getInt32Memory0().subarray(ptr / 4, ptr / 4 + len);
}

let cachedUint32Memory0 = null;

function getUint32Memory0() {
    if (cachedUint32Memory0 === null || cachedUint32Memory0.byteLength === 0) {
        cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32Memory0;
}

function getArrayU32FromWasm0(ptr, len) {
    return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}
function __wbg_adapter_671(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen__convert__closures__invoke2_mut__h7a9944eeaf44bae4(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}

/**
*/
class EventLoopJs {

    static __wrap(ptr) {
        const obj = Object.create(EventLoopJs.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_eventloopjs_free(ptr);
    }
    /**
    * @returns {EventLoopJs}
    */
    static new() {
        const ret = wasm.eventloopjs_new();
        return EventLoopJs.__wrap(ret);
    }
}
/**
*/
class WaterfallGraph {

    static __wrap(ptr) {
        const obj = Object.create(WaterfallGraph.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_waterfallgraph_free(ptr);
    }
    /**
    * @param {number} width
    * @param {number} height
    * @param {number} data_length
    * @param {number} data_heigth_show
    * @param {string} element_id
    * @returns {WaterfallGraph}
    */
    static new(width, height, data_length, data_heigth_show, element_id) {
        const ptr0 = passStringToWasm0(element_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.waterfallgraph_new(width, height, data_length, data_heigth_show, ptr0, len0);
        return WaterfallGraph.__wrap(ret);
    }
    /**
    * @param {number} i
    * @param {number} min
    * @param {number} max
    * @returns {Float32Array}
    */
    debug_data(i, min, max) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.waterfallgraph_debug_data(retptr, this.ptr, i, min, max);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayF32FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 4);
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {Float32Array} number
    * @returns {number}
    */
    add_data(number) {
        const ptr0 = passArrayF32ToWasm0(number, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.waterfallgraph_add_data(this.ptr, ptr0, len0);
        return ret >>> 0;
    }
    /**
    * @param {number} position
    */
    set_slider_position(position) {
        wasm.waterfallgraph_set_slider_position(this.ptr, position);
    }
    /**
    * @returns {number}
    */
    get_slider_position() {
        const ret = wasm.waterfallgraph_get_slider_position(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number | undefined}
    */
    get_mouse_value() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.waterfallgraph_get_mouse_value(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getFloat32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {Promise<void>}
    */
    run() {
        const ret = wasm.waterfallgraph_run(this.ptr);
        return takeObject(ret);
    }
}
/**
*/
class WebglGraph {

    static __wrap(ptr) {
        const obj = Object.create(WebglGraph.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_webglgraph_free(ptr);
    }
    /**
    * @param {number} width
    * @param {number} height
    * @returns {WebglGraph}
    */
    static new(width, height) {
        const ret = wasm.webglgraph_new(width, height);
        return WebglGraph.__wrap(ret);
    }
    /**
    * @param {Float32Array} number
    */
    load_data(number) {
        const ptr0 = passArrayF32ToWasm0(number, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.webglgraph_load_data(this.ptr, ptr0, len0);
    }
    /**
    * @param {number} data_size
    * @param {number} min_value
    * @param {number} max_value
    * @param {number} precision
    * @returns {Promise<void>}
    */
    run(data_size, min_value, max_value, precision) {
        const ret = wasm.webglgraph_run(this.ptr, data_size, min_value, max_value, precision);
        return takeObject(ret);
    }
}
/**
*/
class WebgpuGraph {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_webgpugraph_free(ptr);
    }
}
/**
*/
class WebgpuGraphJs {

    static __wrap(ptr) {
        const obj = Object.create(WebgpuGraphJs.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_webgpugraphjs_free(ptr);
    }
    /**
    * @param {EventLoopJs} event_loop_js
    * @param {number} width
    * @param {number} height
    * @returns {WebgpuGraphJs}
    */
    static New(event_loop_js, width, height) {
        _assertClass(event_loop_js, EventLoopJs);
        const ret = wasm.webgpugraphjs_New(event_loop_js.ptr, width, height);
        return WebgpuGraphJs.__wrap(ret);
    }
    /**
    * @param {number} data_size
    * @param {number} min_value
    * @param {number} max_value
    * @param {number} precision
    * @returns {Promise<any>}
    */
    Init(data_size, min_value, max_value, precision) {
        const ret = wasm.webgpugraphjs_Init(this.ptr, data_size, min_value, max_value, precision);
        return takeObject(ret);
    }
    /**
    * @param {Float32Array} _numbers
    * @returns {Promise<any>}
    */
    UpdateTextureFromData(_numbers) {
        const ptr0 = passArrayF32ToWasm0(_numbers, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.webgpugraphjs_UpdateTextureFromData(this.ptr, ptr0, len0);
        return takeObject(ret);
    }
    /**
    * @param {EventLoopJs} event_loop_js
    * @returns {Promise<void>}
    */
    Run(event_loop_js) {
        _assertClass(event_loop_js, EventLoopJs);
        var ptr0 = event_loop_js.__destroy_into_raw();
        const ret = wasm.webgpugraphjs_Run(this.ptr, ptr0);
        return takeObject(ret);
    }
}

function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
};

function __wbindgen_object_clone_ref(arg0) {
    const ret = getObject(arg0);
    return addHeapObject(ret);
};

function __wbindgen_cb_drop(arg0) {
    const obj = takeObject(arg0).original;
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return true;
    }
    const ret = false;
    return ret;
};

function __wbindgen_string_new(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

function __wbg_new_abda76e883ba8a5f() {
    const ret = new Error();
    return addHeapObject(ret);
};

function __wbg_stack_658279fe44541cf6(arg0, arg1) {
    const ret = getObject(arg1).stack;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

function __wbg_error_f851667af71bcfc6(arg0, arg1) {
    try {
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_free(arg0, arg1);
    }
};

function __wbindgen_string_get(arg0, arg1) {
    const obj = getObject(arg1);
    const ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

function __wbindgen_boolean_get(arg0) {
    const v = getObject(arg0);
    const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
    return ret;
};

function __wbindgen_number_get(arg0, arg1) {
    const obj = getObject(arg1);
    const ret = typeof(obj) === 'number' ? obj : undefined;
    getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
};

function __wbindgen_number_new(arg0) {
    const ret = arg0;
    return addHeapObject(ret);
};

function __wbg_instanceof_WebGl2RenderingContext_61bb2cb23346dbb7(arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof WebGL2RenderingContext;
    } catch {
        result = false;
    }
    const ret = result;
    return ret;
};

function __wbg_beginQuery_fb152d8d84f2b130(arg0, arg1, arg2) {
    getObject(arg0).beginQuery(arg1 >>> 0, getObject(arg2));
};

function __wbg_bindBufferRange_f2c529259df5358e(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).bindBufferRange(arg1 >>> 0, arg2 >>> 0, getObject(arg3), arg4, arg5);
};

function __wbg_bindSampler_6eb88b542e5a410f(arg0, arg1, arg2) {
    getObject(arg0).bindSampler(arg1 >>> 0, getObject(arg2));
};

function __wbg_bindVertexArray_8b71290041cb6746(arg0, arg1) {
    getObject(arg0).bindVertexArray(getObject(arg1));
};

function __wbg_blitFramebuffer_86eee8a5763ded5e(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
    getObject(arg0).blitFramebuffer(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0);
};

function __wbg_bufferData_573e61c49a480c4d(arg0, arg1, arg2, arg3) {
    getObject(arg0).bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
};

function __wbg_bufferData_16f948547d74c866(arg0, arg1, arg2, arg3) {
    getObject(arg0).bufferData(arg1 >>> 0, getObject(arg2), arg3 >>> 0);
};

function __wbg_bufferSubData_c7180c0b681078e8(arg0, arg1, arg2, arg3) {
    getObject(arg0).bufferSubData(arg1 >>> 0, arg2, getObject(arg3));
};

function __wbg_clearBufferfi_95daf829c568e58a(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).clearBufferfi(arg1 >>> 0, arg2, arg3, arg4);
};

function __wbg_clearBufferfv_b3c90fbed3b74920(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).clearBufferfv(arg1 >>> 0, arg2, getArrayF32FromWasm0(arg3, arg4));
};

function __wbg_clearBufferiv_fe2a00a8f8fb7322(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).clearBufferiv(arg1 >>> 0, arg2, getArrayI32FromWasm0(arg3, arg4));
};

function __wbg_clearBufferuiv_a41730a8d84c6ac6(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).clearBufferuiv(arg1 >>> 0, arg2, getArrayU32FromWasm0(arg3, arg4));
};

function __wbg_clientWaitSync_ae8f3712f85a57fb(arg0, arg1, arg2, arg3) {
    const ret = getObject(arg0).clientWaitSync(getObject(arg1), arg2 >>> 0, arg3 >>> 0);
    return ret;
};

function __wbg_compressedTexSubImage2D_23b602b828848fb7(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    getObject(arg0).compressedTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8, arg9);
};

function __wbg_compressedTexSubImage2D_d6c95fc640a9f4de(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
    getObject(arg0).compressedTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, getObject(arg8));
};

function __wbg_compressedTexSubImage3D_00b794917e65d559(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
    getObject(arg0).compressedTexSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10, arg11);
};

function __wbg_compressedTexSubImage3D_c9c7b42e0f7db586(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
    getObject(arg0).compressedTexSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, getObject(arg10));
};

function __wbg_copyBufferSubData_c903618a0e0a9fca(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).copyBufferSubData(arg1 >>> 0, arg2 >>> 0, arg3, arg4, arg5);
};

function __wbg_copyTexSubImage3D_88fc9e1c56d3e7db(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    getObject(arg0).copyTexSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
};

function __wbg_createSampler_d1255ae3836b1bee(arg0) {
    const ret = getObject(arg0).createSampler();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_createVertexArray_de7292bbd7ea02dd(arg0) {
    const ret = getObject(arg0).createVertexArray();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_deleteQuery_0981fb4d492e46a7(arg0, arg1) {
    getObject(arg0).deleteQuery(getObject(arg1));
};

function __wbg_deleteSampler_6d832d1900eafbea(arg0, arg1) {
    getObject(arg0).deleteSampler(getObject(arg1));
};

function __wbg_deleteSync_f8f026807b7eee54(arg0, arg1) {
    getObject(arg0).deleteSync(getObject(arg1));
};

function __wbg_deleteVertexArray_dc4f1b2e5ac93f24(arg0, arg1) {
    getObject(arg0).deleteVertexArray(getObject(arg1));
};

function __wbg_drawArraysInstanced_1222b6236d008088(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).drawArraysInstanced(arg1 >>> 0, arg2, arg3, arg4);
};

function __wbg_drawBuffers_3223f0aeb44f7057(arg0, arg1) {
    getObject(arg0).drawBuffers(getObject(arg1));
};

function __wbg_drawElementsInstanced_b4714f8dd90fd2a8(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).drawElementsInstanced(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
};

function __wbg_endQuery_726967da9d5d1ca7(arg0, arg1) {
    getObject(arg0).endQuery(arg1 >>> 0);
};

function __wbg_fenceSync_fb3e1185847ee462(arg0, arg1, arg2) {
    const ret = getObject(arg0).fenceSync(arg1 >>> 0, arg2 >>> 0);
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_framebufferTextureLayer_e644333b8ec36f9d(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).framebufferTextureLayer(arg1 >>> 0, arg2 >>> 0, getObject(arg3), arg4, arg5);
};

function __wbg_getBufferSubData_cd8138c86821bca3(arg0, arg1, arg2, arg3) {
    getObject(arg0).getBufferSubData(arg1 >>> 0, arg2, getObject(arg3));
};

function __wbg_getIndexedParameter_5f5c79f6c05edd18() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).getIndexedParameter(arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
}, arguments) };

function __wbg_getQueryParameter_e0f43fb85f793bbe(arg0, arg1, arg2) {
    const ret = getObject(arg0).getQueryParameter(getObject(arg1), arg2 >>> 0);
    return addHeapObject(ret);
};

function __wbg_getSyncParameter_b2f55318719e958c(arg0, arg1, arg2) {
    const ret = getObject(arg0).getSyncParameter(getObject(arg1), arg2 >>> 0);
    return addHeapObject(ret);
};

function __wbg_getUniformBlockIndex_a05b0c144aa49817(arg0, arg1, arg2, arg3) {
    const ret = getObject(arg0).getUniformBlockIndex(getObject(arg1), getStringFromWasm0(arg2, arg3));
    return ret;
};

function __wbg_invalidateFramebuffer_696c3c456c34a207() { return handleError(function (arg0, arg1, arg2) {
    getObject(arg0).invalidateFramebuffer(arg1 >>> 0, getObject(arg2));
}, arguments) };

function __wbg_readBuffer_bade27c1171e00cf(arg0, arg1) {
    getObject(arg0).readBuffer(arg1 >>> 0);
};

function __wbg_readPixels_493558abd28a3b61() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    getObject(arg0).readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, getObject(arg7));
}, arguments) };

function __wbg_readPixels_92102ee9fe1c81a0() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    getObject(arg0).readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
}, arguments) };

function __wbg_renderbufferStorageMultisample_9cb173d2fd461513(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).renderbufferStorageMultisample(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
};

function __wbg_samplerParameterf_38ca759dc5c40461(arg0, arg1, arg2, arg3) {
    getObject(arg0).samplerParameterf(getObject(arg1), arg2 >>> 0, arg3);
};

function __wbg_samplerParameteri_c631c02ceefc6dc1(arg0, arg1, arg2, arg3) {
    getObject(arg0).samplerParameteri(getObject(arg1), arg2 >>> 0, arg3);
};

function __wbg_texStorage2D_89c29252632da923(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).texStorage2D(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
};

function __wbg_texStorage3D_3897fb6b91eb82d8(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    getObject(arg0).texStorage3D(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5, arg6);
};

function __wbg_texSubImage2D_6a8b0f3381d734c3() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, getObject(arg9));
}, arguments) };

function __wbg_texSubImage2D_53b6a050a0b9b24e() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
}, arguments) };

function __wbg_texSubImage3D_84ef903e11598af0() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
    getObject(arg0).texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
}, arguments) };

function __wbg_texSubImage3D_1d82135e9ce965bf() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
    getObject(arg0).texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, getObject(arg11));
}, arguments) };

function __wbg_uniform2fv_ffd0b1d3c3a4070a(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform2fv(getObject(arg1), getArrayF32FromWasm0(arg2, arg3));
};

function __wbg_uniform2iv_32329f9a4d491136(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform2iv(getObject(arg1), getArrayI32FromWasm0(arg2, arg3));
};

function __wbg_uniform3fv_bc831e48acb2c057(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform3fv(getObject(arg1), getArrayF32FromWasm0(arg2, arg3));
};

function __wbg_uniform3iv_100a284f5a3cbca5(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform3iv(getObject(arg1), getArrayI32FromWasm0(arg2, arg3));
};

function __wbg_uniform4fv_26d822da5c3fdb00(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform4fv(getObject(arg1), getArrayF32FromWasm0(arg2, arg3));
};

function __wbg_uniform4iv_7f03c41e6e49bbd6(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform4iv(getObject(arg1), getArrayI32FromWasm0(arg2, arg3));
};

function __wbg_uniformBlockBinding_1971f4528d9c3043(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniformBlockBinding(getObject(arg1), arg2 >>> 0, arg3 >>> 0);
};

function __wbg_uniformMatrix2fv_5f1f56c7cbfb533f(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniformMatrix2fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
};

function __wbg_uniformMatrix3fv_ae9271db8127a57b(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniformMatrix3fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
};

function __wbg_uniformMatrix4fv_0f42d678a568ded9(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniformMatrix4fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
};

function __wbg_vertexAttribDivisor_77f020121066a4d9(arg0, arg1, arg2) {
    getObject(arg0).vertexAttribDivisor(arg1 >>> 0, arg2 >>> 0);
};

function __wbg_vertexAttribIPointer_b15ad1437a268cf5(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).vertexAttribIPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
};

function __wbg_activeTexture_0daf7c1698e49f00(arg0, arg1) {
    getObject(arg0).activeTexture(arg1 >>> 0);
};

function __wbg_attachShader_3038234860d2d59d(arg0, arg1, arg2) {
    getObject(arg0).attachShader(getObject(arg1), getObject(arg2));
};

function __wbg_bindBuffer_9cb064991696b79f(arg0, arg1, arg2) {
    getObject(arg0).bindBuffer(arg1 >>> 0, getObject(arg2));
};

function __wbg_bindFramebuffer_0522db2a250c29f0(arg0, arg1, arg2) {
    getObject(arg0).bindFramebuffer(arg1 >>> 0, getObject(arg2));
};

function __wbg_bindRenderbuffer_1e4928d9bf839c02(arg0, arg1, arg2) {
    getObject(arg0).bindRenderbuffer(arg1 >>> 0, getObject(arg2));
};

function __wbg_bindTexture_0c284b1604ba527c(arg0, arg1, arg2) {
    getObject(arg0).bindTexture(arg1 >>> 0, getObject(arg2));
};

function __wbg_blendColor_a17ddceb3534e0b3(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).blendColor(arg1, arg2, arg3, arg4);
};

function __wbg_blendEquation_b5d5be767bd3835a(arg0, arg1) {
    getObject(arg0).blendEquation(arg1 >>> 0);
};

function __wbg_blendEquationSeparate_d2fa3b718ee3579f(arg0, arg1, arg2) {
    getObject(arg0).blendEquationSeparate(arg1 >>> 0, arg2 >>> 0);
};

function __wbg_blendFunc_d456b0c766f8dbc9(arg0, arg1, arg2) {
    getObject(arg0).blendFunc(arg1 >>> 0, arg2 >>> 0);
};

function __wbg_blendFuncSeparate_9a7146974b3cd76d(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
};

function __wbg_colorMask_a7f067283ed312c9(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).colorMask(arg1 !== 0, arg2 !== 0, arg3 !== 0, arg4 !== 0);
};

function __wbg_compileShader_af777dd3b15798b3(arg0, arg1) {
    getObject(arg0).compileShader(getObject(arg1));
};

function __wbg_copyTexSubImage2D_47b14ff8459fd4c8(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
    getObject(arg0).copyTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
};

function __wbg_createBuffer_5ed0554ab35780b5(arg0) {
    const ret = getObject(arg0).createBuffer();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_createFramebuffer_86883935c13ddd59(arg0) {
    const ret = getObject(arg0).createFramebuffer();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_createProgram_7d25c1dd3bb0ce39(arg0) {
    const ret = getObject(arg0).createProgram();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_createRenderbuffer_b392324e044d389a(arg0) {
    const ret = getObject(arg0).createRenderbuffer();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_createShader_96339db58713e350(arg0, arg1) {
    const ret = getObject(arg0).createShader(arg1 >>> 0);
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_createTexture_c651f9e28d1ce9d2(arg0) {
    const ret = getObject(arg0).createTexture();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_cullFace_79e4ddbea13278b3(arg0, arg1) {
    getObject(arg0).cullFace(arg1 >>> 0);
};

function __wbg_deleteBuffer_cf67a696a7857b3f(arg0, arg1) {
    getObject(arg0).deleteBuffer(getObject(arg1));
};

function __wbg_deleteFramebuffer_f9c2bceeb5422d9d(arg0, arg1) {
    getObject(arg0).deleteFramebuffer(getObject(arg1));
};

function __wbg_deleteProgram_9c8fa1ef341cb01d(arg0, arg1) {
    getObject(arg0).deleteProgram(getObject(arg1));
};

function __wbg_deleteRenderbuffer_cad502ac8d1398f2(arg0, arg1) {
    getObject(arg0).deleteRenderbuffer(getObject(arg1));
};

function __wbg_deleteShader_f48f72524f5ee3ed(arg0, arg1) {
    getObject(arg0).deleteShader(getObject(arg1));
};

function __wbg_deleteTexture_1b5f5e536e0d5545(arg0, arg1) {
    getObject(arg0).deleteTexture(getObject(arg1));
};

function __wbg_depthFunc_2060ec3687ac1f95(arg0, arg1) {
    getObject(arg0).depthFunc(arg1 >>> 0);
};

function __wbg_depthMask_27d367443a80541d(arg0, arg1) {
    getObject(arg0).depthMask(arg1 !== 0);
};

function __wbg_depthRange_7109c2393819a37b(arg0, arg1, arg2) {
    getObject(arg0).depthRange(arg1, arg2);
};

function __wbg_disable_3adb8645ea1d92d4(arg0, arg1) {
    getObject(arg0).disable(arg1 >>> 0);
};

function __wbg_disableVertexAttribArray_f469283fda607cee(arg0, arg1) {
    getObject(arg0).disableVertexAttribArray(arg1 >>> 0);
};

function __wbg_drawArrays_84de8a2416396807(arg0, arg1, arg2, arg3) {
    getObject(arg0).drawArrays(arg1 >>> 0, arg2, arg3);
};

function __wbg_drawElements_dcb8df9c52e2bbd5(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).drawElements(arg1 >>> 0, arg2, arg3 >>> 0, arg4);
};

function __wbg_enable_1ac9f14a577b7c8b(arg0, arg1) {
    getObject(arg0).enable(arg1 >>> 0);
};

function __wbg_enableVertexAttribArray_53139716d9c95dba(arg0, arg1) {
    getObject(arg0).enableVertexAttribArray(arg1 >>> 0);
};

function __wbg_framebufferRenderbuffer_77bdb2f359a5728f(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).framebufferRenderbuffer(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, getObject(arg4));
};

function __wbg_framebufferTexture2D_885176f16a153fec(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, getObject(arg4), arg5);
};

function __wbg_frontFace_3d7784c56ffede8a(arg0, arg1) {
    getObject(arg0).frontFace(arg1 >>> 0);
};

function __wbg_getActiveUniform_9c4ac7c1ccf5f894(arg0, arg1, arg2) {
    const ret = getObject(arg0).getActiveUniform(getObject(arg1), arg2 >>> 0);
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_getExtension_f0070583175271d4() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).getExtension(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

function __wbg_getParameter_56d47f9b55e463d4() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).getParameter(arg1 >>> 0);
    return addHeapObject(ret);
}, arguments) };

function __wbg_getProgramInfoLog_7654794297967ac0(arg0, arg1, arg2) {
    const ret = getObject(arg1).getProgramInfoLog(getObject(arg2));
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

function __wbg_getProgramParameter_5b1a40917aa850f8(arg0, arg1, arg2) {
    const ret = getObject(arg0).getProgramParameter(getObject(arg1), arg2 >>> 0);
    return addHeapObject(ret);
};

function __wbg_getShaderInfoLog_915d0e8506c11159(arg0, arg1, arg2) {
    const ret = getObject(arg1).getShaderInfoLog(getObject(arg2));
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

function __wbg_getShaderParameter_f9240892c9e7a0a3(arg0, arg1, arg2) {
    const ret = getObject(arg0).getShaderParameter(getObject(arg1), arg2 >>> 0);
    return addHeapObject(ret);
};

function __wbg_getSupportedExtensions_7af8f7bbdd4d7b2c(arg0) {
    const ret = getObject(arg0).getSupportedExtensions();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_getUniformLocation_c6caabb349b43da7(arg0, arg1, arg2, arg3) {
    const ret = getObject(arg0).getUniformLocation(getObject(arg1), getStringFromWasm0(arg2, arg3));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_linkProgram_2d5cc584654696b8(arg0, arg1) {
    getObject(arg0).linkProgram(getObject(arg1));
};

function __wbg_pixelStorei_a0b83efc92cd29fe(arg0, arg1, arg2) {
    getObject(arg0).pixelStorei(arg1 >>> 0, arg2);
};

function __wbg_polygonOffset_03d3955d5a1afa08(arg0, arg1, arg2) {
    getObject(arg0).polygonOffset(arg1, arg2);
};

function __wbg_renderbufferStorage_2192d9cd09128339(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).renderbufferStorage(arg1 >>> 0, arg2 >>> 0, arg3, arg4);
};

function __wbg_scissor_2b084e0dc81d67f4(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).scissor(arg1, arg2, arg3, arg4);
};

function __wbg_shaderSource_57883245cdfb0dca(arg0, arg1, arg2, arg3) {
    getObject(arg0).shaderSource(getObject(arg1), getStringFromWasm0(arg2, arg3));
};

function __wbg_stencilFuncSeparate_3be68afd7ca6efcc(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).stencilFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3, arg4 >>> 0);
};

function __wbg_stencilMask_144b86d15d9fdbe6(arg0, arg1) {
    getObject(arg0).stencilMask(arg1 >>> 0);
};

function __wbg_stencilMaskSeparate_84a2494b967772c7(arg0, arg1, arg2) {
    getObject(arg0).stencilMaskSeparate(arg1 >>> 0, arg2 >>> 0);
};

function __wbg_stencilOpSeparate_1708aea1aea0dc48(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).stencilOpSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
};

function __wbg_texParameteri_e0ce3810261e0864(arg0, arg1, arg2, arg3) {
    getObject(arg0).texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
};

function __wbg_uniform1f_dcc6951bde745417(arg0, arg1, arg2) {
    getObject(arg0).uniform1f(getObject(arg1), arg2);
};

function __wbg_uniform1i_4fdc6d6740375d22(arg0, arg1, arg2) {
    getObject(arg0).uniform1i(getObject(arg1), arg2);
};

function __wbg_uniform4f_19b349303edb7836(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).uniform4f(getObject(arg1), arg2, arg3, arg4, arg5);
};

function __wbg_useProgram_2f4094faf45ecba1(arg0, arg1) {
    getObject(arg0).useProgram(getObject(arg1));
};

function __wbg_vertexAttribPointer_ad370785358334f4(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    getObject(arg0).vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
};

function __wbg_viewport_cc41e28a71c23915(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).viewport(arg1, arg2, arg3, arg4);
};

function __wbg_instanceof_Window_e266f02eee43b570(arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof Window;
    } catch {
        result = false;
    }
    const ret = result;
    return ret;
};

function __wbg_document_950215a728589a2d(arg0) {
    const ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_innerWidth_7e9d12e05bcb598e() { return handleError(function (arg0) {
    const ret = getObject(arg0).innerWidth;
    return addHeapObject(ret);
}, arguments) };

function __wbg_innerHeight_3ef25a30618357e0() { return handleError(function (arg0) {
    const ret = getObject(arg0).innerHeight;
    return addHeapObject(ret);
}, arguments) };

function __wbg_devicePixelRatio_5f8f5cab76864090(arg0) {
    const ret = getObject(arg0).devicePixelRatio;
    return ret;
};

function __wbg_cancelAnimationFrame_d079cdb83bc43b26() { return handleError(function (arg0, arg1) {
    getObject(arg0).cancelAnimationFrame(arg1);
}, arguments) };

function __wbg_matchMedia_967e50e4289050fa() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).matchMedia(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

function __wbg_requestAnimationFrame_afe426b568f84138() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).requestAnimationFrame(getObject(arg1));
    return ret;
}, arguments) };

function __wbg_get_e6ae480a4b8df368(arg0, arg1, arg2) {
    const ret = getObject(arg0)[getStringFromWasm0(arg1, arg2)];
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_clearTimeout_b2b8af0f044e02e9(arg0, arg1) {
    getObject(arg0).clearTimeout(arg1);
};

function __wbg_setTimeout_6609c9aa64f32bfc() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
    return ret;
}, arguments) };

function __wbg_matches_7b5ad9e6bb56f1f3(arg0) {
    const ret = getObject(arg0).matches;
    return ret;
};

function __wbg_addListener_dfc3f9e430149b14() { return handleError(function (arg0, arg1) {
    getObject(arg0).addListener(getObject(arg1));
}, arguments) };

function __wbg_removeListener_6f811d2fb59768b9() { return handleError(function (arg0, arg1) {
    getObject(arg0).removeListener(getObject(arg1));
}, arguments) };

function __wbg_size_5ce324b99223d189(arg0) {
    const ret = getObject(arg0).size;
    return ret;
};

function __wbg_type_979610383a4b7c57(arg0) {
    const ret = getObject(arg0).type;
    return ret;
};

function __wbg_name_1e6651aff4fe7a88(arg0, arg1) {
    const ret = getObject(arg1).name;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

function __wbg_drawArraysInstancedANGLE_403faa11d52ccf6d(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).drawArraysInstancedANGLE(arg1 >>> 0, arg2, arg3, arg4);
};

function __wbg_drawElementsInstancedANGLE_0230afc27cf9cec9(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).drawElementsInstancedANGLE(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
};

function __wbg_vertexAttribDivisorANGLE_6bbb3df4c6e7d08b(arg0, arg1, arg2) {
    getObject(arg0).vertexAttribDivisorANGLE(arg1 >>> 0, arg2 >>> 0);
};

function __wbg_setProperty_21e2e7868b86a93e() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setProperty(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
}, arguments) };

function __wbg_x_0938e87a3ff14a2e(arg0) {
    const ret = getObject(arg0).x;
    return ret;
};

function __wbg_y_b881176a43492948(arg0) {
    const ret = getObject(arg0).y;
    return ret;
};

function __wbg_pointerId_d2caae4465ba386f(arg0) {
    const ret = getObject(arg0).pointerId;
    return ret;
};

function __wbg_pressure_352c13794490720b(arg0) {
    const ret = getObject(arg0).pressure;
    return ret;
};

function __wbg_pointerType_df759fa0bd6634ed(arg0, arg1) {
    const ret = getObject(arg1).pointerType;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

function __wbg_deltaX_b7d127c94d6265c0(arg0) {
    const ret = getObject(arg0).deltaX;
    return ret;
};

function __wbg_deltaY_b32fa858e16edcc0(arg0) {
    const ret = getObject(arg0).deltaY;
    return ret;
};

function __wbg_deltaMode_11f7b19e64d9a515(arg0) {
    const ret = getObject(arg0).deltaMode;
    return ret;
};

function __wbg_clientX_35f23f953e04ec0e(arg0) {
    const ret = getObject(arg0).clientX;
    return ret;
};

function __wbg_clientY_8104e462abc0b3ec(arg0) {
    const ret = getObject(arg0).clientY;
    return ret;
};

function __wbg_offsetX_413d9f02022e72ad(arg0) {
    const ret = getObject(arg0).offsetX;
    return ret;
};

function __wbg_offsetY_488f80a0a9666028(arg0) {
    const ret = getObject(arg0).offsetY;
    return ret;
};

function __wbg_ctrlKey_e1b8f1de1eb24d5d(arg0) {
    const ret = getObject(arg0).ctrlKey;
    return ret;
};

function __wbg_shiftKey_fdd99b6df96e25c5(arg0) {
    const ret = getObject(arg0).shiftKey;
    return ret;
};

function __wbg_altKey_d531a4d3704557cb(arg0) {
    const ret = getObject(arg0).altKey;
    return ret;
};

function __wbg_metaKey_934772989e28020c(arg0) {
    const ret = getObject(arg0).metaKey;
    return ret;
};

function __wbg_button_a1c470d5e4c997f2(arg0) {
    const ret = getObject(arg0).button;
    return ret;
};

function __wbg_buttons_42a7b7de33d8e572(arg0) {
    const ret = getObject(arg0).buttons;
    return ret;
};

function __wbg_movementX_f4d07f6658c1e16f(arg0) {
    const ret = getObject(arg0).movementX;
    return ret;
};

function __wbg_movementY_30276c1f90aec4fa(arg0) {
    const ret = getObject(arg0).movementY;
    return ret;
};

function __wbg_instanceof_HtmlCanvasElement_f5f69dab93281ebe(arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof HTMLCanvasElement;
    } catch {
        result = false;
    }
    const ret = result;
    return ret;
};

function __wbg_width_a40e21a22129b197(arg0) {
    const ret = getObject(arg0).width;
    return ret;
};

function __wbg_setwidth_81c62bc806e0a727(arg0, arg1) {
    getObject(arg0).width = arg1 >>> 0;
};

function __wbg_height_98d51321254345a5(arg0) {
    const ret = getObject(arg0).height;
    return ret;
};

function __wbg_setheight_98cf0db22c40ef07(arg0, arg1) {
    getObject(arg0).height = arg1 >>> 0;
};

function __wbg_getContext_89a318b610dc5fd4() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2), getObject(arg3));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

function __wbg_matches_46e979ff3e4d0811(arg0) {
    const ret = getObject(arg0).matches;
    return ret;
};

function __wbg_bindVertexArrayOES_688eba003a98a0bb(arg0, arg1) {
    getObject(arg0).bindVertexArrayOES(getObject(arg1));
};

function __wbg_createVertexArrayOES_02cfe655604046eb(arg0) {
    const ret = getObject(arg0).createVertexArrayOES();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_deleteVertexArrayOES_ba22911f739464a7(arg0, arg1) {
    getObject(arg0).deleteVertexArrayOES(getObject(arg1));
};

function __wbg_now_c644db5194be8437(arg0) {
    const ret = getObject(arg0).now();
    return ret;
};

function __wbg_drawBuffersWEBGL_dfb0d803ea7ebe07(arg0, arg1) {
    getObject(arg0).drawBuffersWEBGL(getObject(arg1));
};

function __wbg_fullscreenElement_65f14a4df7c25129(arg0) {
    const ret = getObject(arg0).fullscreenElement;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_createElement_e2a0e21263eb5416() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).createElement(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
}, arguments) };

function __wbg_getElementById_eb93a47327bb5585(arg0, arg1, arg2) {
    const ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_querySelector_32b9d7ebb2df951d() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).querySelector(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

function __wbg_getBoundingClientRect_aaa701cbcb448965(arg0) {
    const ret = getObject(arg0).getBoundingClientRect();
    return addHeapObject(ret);
};

function __wbg_requestFullscreen_4eee04b9090fa98a() { return handleError(function (arg0) {
    getObject(arg0).requestFullscreen();
}, arguments) };

function __wbg_setAttribute_79c9562d32d05e66() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
}, arguments) };

function __wbg_setPointerCapture_5479dc0d082282b7() { return handleError(function (arg0, arg1) {
    getObject(arg0).setPointerCapture(arg1);
}, arguments) };

function __wbg_style_2141664e428fef46(arg0) {
    const ret = getObject(arg0).style;
    return addHeapObject(ret);
};

function __wbg_bufferData_05664df801d7aec0(arg0, arg1, arg2, arg3) {
    getObject(arg0).bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
};

function __wbg_bufferData_023700b2ed207c43(arg0, arg1, arg2, arg3) {
    getObject(arg0).bufferData(arg1 >>> 0, getObject(arg2), arg3 >>> 0);
};

function __wbg_bufferSubData_4e653f611d7a962d(arg0, arg1, arg2, arg3) {
    getObject(arg0).bufferSubData(arg1 >>> 0, arg2, getObject(arg3));
};

function __wbg_compressedTexSubImage2D_788296e97b316838(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
    getObject(arg0).compressedTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, getObject(arg8));
};

function __wbg_readPixels_30de7174c15126d3() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    getObject(arg0).readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, getObject(arg7));
}, arguments) };

function __wbg_texSubImage2D_57792696288b0a61() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, getObject(arg9));
}, arguments) };

function __wbg_uniform2fv_c29ce786946f1aae(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform2fv(getObject(arg1), getArrayF32FromWasm0(arg2, arg3));
};

function __wbg_uniform2iv_58c3d5ee9e70c71d(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform2iv(getObject(arg1), getArrayI32FromWasm0(arg2, arg3));
};

function __wbg_uniform3fv_5ca48b3279e0c643(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform3fv(getObject(arg1), getArrayF32FromWasm0(arg2, arg3));
};

function __wbg_uniform3iv_0a103fe131bd9213(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform3iv(getObject(arg1), getArrayI32FromWasm0(arg2, arg3));
};

function __wbg_uniform4fv_14f1c5ef10bfb4c9(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform4fv(getObject(arg1), getArrayF32FromWasm0(arg2, arg3));
};

function __wbg_uniform4iv_9436eeda2a27cce8(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform4iv(getObject(arg1), getArrayI32FromWasm0(arg2, arg3));
};

function __wbg_uniformMatrix2fv_1a40e9f63b2005c8(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniformMatrix2fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
};

function __wbg_uniformMatrix3fv_dcde28ba8c34d30e(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniformMatrix3fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
};

function __wbg_uniformMatrix4fv_4575a018c8188146(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniformMatrix4fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
};

function __wbg_activeTexture_01d5469eb22c10e7(arg0, arg1) {
    getObject(arg0).activeTexture(arg1 >>> 0);
};

function __wbg_attachShader_14fb12e2ae589dc3(arg0, arg1, arg2) {
    getObject(arg0).attachShader(getObject(arg1), getObject(arg2));
};

function __wbg_bindBuffer_b7c382dcd70e33f6(arg0, arg1, arg2) {
    getObject(arg0).bindBuffer(arg1 >>> 0, getObject(arg2));
};

function __wbg_bindFramebuffer_a5ab0ed0463586cb(arg0, arg1, arg2) {
    getObject(arg0).bindFramebuffer(arg1 >>> 0, getObject(arg2));
};

function __wbg_bindRenderbuffer_2d67c879cdbe5ea9(arg0, arg1, arg2) {
    getObject(arg0).bindRenderbuffer(arg1 >>> 0, getObject(arg2));
};

function __wbg_bindTexture_c1c0e00507424f8e(arg0, arg1, arg2) {
    getObject(arg0).bindTexture(arg1 >>> 0, getObject(arg2));
};

function __wbg_blendColor_13739d87434b79c3(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).blendColor(arg1, arg2, arg3, arg4);
};

function __wbg_blendEquation_562c3267161e4675(arg0, arg1) {
    getObject(arg0).blendEquation(arg1 >>> 0);
};

function __wbg_blendEquationSeparate_48b95e78f7224be4(arg0, arg1, arg2) {
    getObject(arg0).blendEquationSeparate(arg1 >>> 0, arg2 >>> 0);
};

function __wbg_blendFunc_f4365f78b650180f(arg0, arg1, arg2) {
    getObject(arg0).blendFunc(arg1 >>> 0, arg2 >>> 0);
};

function __wbg_blendFuncSeparate_b508053691b6ebbe(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
};

function __wbg_colorMask_99120a2c8caf1298(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).colorMask(arg1 !== 0, arg2 !== 0, arg3 !== 0, arg4 !== 0);
};

function __wbg_compileShader_4e9130ccbd4a0238(arg0, arg1) {
    getObject(arg0).compileShader(getObject(arg1));
};

function __wbg_copyTexSubImage2D_7c0b0080eece3c1a(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
    getObject(arg0).copyTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
};

function __wbg_createBuffer_8c64250e5283611c(arg0) {
    const ret = getObject(arg0).createBuffer();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_createFramebuffer_1f943a32c748753e(arg0) {
    const ret = getObject(arg0).createFramebuffer();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_createProgram_28db0ff3cee5f71a(arg0) {
    const ret = getObject(arg0).createProgram();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_createRenderbuffer_a76dcfda7bdc749a(arg0) {
    const ret = getObject(arg0).createRenderbuffer();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_createShader_c5fcd8592f47b510(arg0, arg1) {
    const ret = getObject(arg0).createShader(arg1 >>> 0);
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_createTexture_81fd93af28301e0e(arg0) {
    const ret = getObject(arg0).createTexture();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_cullFace_d4450f8718c6b3eb(arg0, arg1) {
    getObject(arg0).cullFace(arg1 >>> 0);
};

function __wbg_deleteBuffer_17feed38f3a70ec9(arg0, arg1) {
    getObject(arg0).deleteBuffer(getObject(arg1));
};

function __wbg_deleteFramebuffer_130abca01c89b7d6(arg0, arg1) {
    getObject(arg0).deleteFramebuffer(getObject(arg1));
};

function __wbg_deleteProgram_dd5f0e2bc555e270(arg0, arg1) {
    getObject(arg0).deleteProgram(getObject(arg1));
};

function __wbg_deleteRenderbuffer_385f3c9e8759b99e(arg0, arg1) {
    getObject(arg0).deleteRenderbuffer(getObject(arg1));
};

function __wbg_deleteShader_fac9fb3cdefdf6ec(arg0, arg1) {
    getObject(arg0).deleteShader(getObject(arg1));
};

function __wbg_deleteTexture_605a36a7e380df5f(arg0, arg1) {
    getObject(arg0).deleteTexture(getObject(arg1));
};

function __wbg_depthFunc_00d8a905436dc681(arg0, arg1) {
    getObject(arg0).depthFunc(arg1 >>> 0);
};

function __wbg_depthMask_134f9e3073ca4fd0(arg0, arg1) {
    getObject(arg0).depthMask(arg1 !== 0);
};

function __wbg_depthRange_f34f19edea1feadd(arg0, arg1, arg2) {
    getObject(arg0).depthRange(arg1, arg2);
};

function __wbg_disable_65425605098b79cf(arg0, arg1) {
    getObject(arg0).disable(arg1 >>> 0);
};

function __wbg_disableVertexAttribArray_cf25f8beb5872364(arg0, arg1) {
    getObject(arg0).disableVertexAttribArray(arg1 >>> 0);
};

function __wbg_drawArrays_e5fa3cfc2b5d7c6d(arg0, arg1, arg2, arg3) {
    getObject(arg0).drawArrays(arg1 >>> 0, arg2, arg3);
};

function __wbg_drawElements_a388832eba137ef0(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).drawElements(arg1 >>> 0, arg2, arg3 >>> 0, arg4);
};

function __wbg_enable_2c3b6a4692af9b1b(arg0, arg1) {
    getObject(arg0).enable(arg1 >>> 0);
};

function __wbg_enableVertexAttribArray_6dd3d0668209ae19(arg0, arg1) {
    getObject(arg0).enableVertexAttribArray(arg1 >>> 0);
};

function __wbg_framebufferRenderbuffer_3bf1420713a0b21a(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).framebufferRenderbuffer(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, getObject(arg4));
};

function __wbg_framebufferTexture2D_ed03c0674b9979ce(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, getObject(arg4), arg5);
};

function __wbg_frontFace_00177185d2fae697(arg0, arg1) {
    getObject(arg0).frontFace(arg1 >>> 0);
};

function __wbg_getActiveUniform_e49dcda694ae15ab(arg0, arg1, arg2) {
    const ret = getObject(arg0).getActiveUniform(getObject(arg1), arg2 >>> 0);
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_getParameter_d6cd2dd2cde656ec() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).getParameter(arg1 >>> 0);
    return addHeapObject(ret);
}, arguments) };

function __wbg_getProgramInfoLog_7fd2a7c6c1a280c1(arg0, arg1, arg2) {
    const ret = getObject(arg1).getProgramInfoLog(getObject(arg2));
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

function __wbg_getProgramParameter_af1cfcccbbc80f71(arg0, arg1, arg2) {
    const ret = getObject(arg0).getProgramParameter(getObject(arg1), arg2 >>> 0);
    return addHeapObject(ret);
};

function __wbg_getShaderInfoLog_d057293074e59c61(arg0, arg1, arg2) {
    const ret = getObject(arg1).getShaderInfoLog(getObject(arg2));
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

function __wbg_getShaderParameter_685d7d7092c6bae6(arg0, arg1, arg2) {
    const ret = getObject(arg0).getShaderParameter(getObject(arg1), arg2 >>> 0);
    return addHeapObject(ret);
};

function __wbg_getUniformLocation_b46e5db76599a918(arg0, arg1, arg2, arg3) {
    const ret = getObject(arg0).getUniformLocation(getObject(arg1), getStringFromWasm0(arg2, arg3));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_linkProgram_ca9df3fba2fd4125(arg0, arg1) {
    getObject(arg0).linkProgram(getObject(arg1));
};

function __wbg_pixelStorei_f97b971917582269(arg0, arg1, arg2) {
    getObject(arg0).pixelStorei(arg1 >>> 0, arg2);
};

function __wbg_polygonOffset_fb73618b77fd3f6f(arg0, arg1, arg2) {
    getObject(arg0).polygonOffset(arg1, arg2);
};

function __wbg_renderbufferStorage_37eab84be1494aef(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).renderbufferStorage(arg1 >>> 0, arg2 >>> 0, arg3, arg4);
};

function __wbg_scissor_8bc2e761846f53f0(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).scissor(arg1, arg2, arg3, arg4);
};

function __wbg_shaderSource_457e8bc42050401d(arg0, arg1, arg2, arg3) {
    getObject(arg0).shaderSource(getObject(arg1), getStringFromWasm0(arg2, arg3));
};

function __wbg_stencilFuncSeparate_510d3287542b4574(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).stencilFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3, arg4 >>> 0);
};

function __wbg_stencilMask_e1887eeaabe22771(arg0, arg1) {
    getObject(arg0).stencilMask(arg1 >>> 0);
};

function __wbg_stencilMaskSeparate_e89abefeb5641657(arg0, arg1, arg2) {
    getObject(arg0).stencilMaskSeparate(arg1 >>> 0, arg2 >>> 0);
};

function __wbg_stencilOpSeparate_aa3d09aa448a6f48(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).stencilOpSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
};

function __wbg_texParameteri_9fbb09bbf9670af4(arg0, arg1, arg2, arg3) {
    getObject(arg0).texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
};

function __wbg_uniform1f_062c683ec584f7e8(arg0, arg1, arg2) {
    getObject(arg0).uniform1f(getObject(arg1), arg2);
};

function __wbg_uniform1i_1f8256271b54cf41(arg0, arg1, arg2) {
    getObject(arg0).uniform1i(getObject(arg1), arg2);
};

function __wbg_uniform4f_68fac972655f5359(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).uniform4f(getObject(arg1), arg2, arg3, arg4, arg5);
};

function __wbg_useProgram_6c9019d05fb8d280(arg0, arg1) {
    getObject(arg0).useProgram(getObject(arg1));
};

function __wbg_vertexAttribPointer_ccabef9be68fe1c4(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    getObject(arg0).vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
};

function __wbg_viewport_4bdfc4b8959593ee(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).viewport(arg1, arg2, arg3, arg4);
};

function __wbg_debug_8db2eed1bf6c1e2a(arg0) {
    console.debug(getObject(arg0));
};

function __wbg_error_fe807da27c4a4ced(arg0) {
    console.error(getObject(arg0));
};

function __wbg_error_2d344a50ccf38b3b(arg0, arg1) {
    console.error(getObject(arg0), getObject(arg1));
};

function __wbg_info_9e6db45ac337c3b5(arg0) {
    console.info(getObject(arg0));
};

function __wbg_log_7bb108d119bafbc1(arg0) {
    console.log(getObject(arg0));
};

function __wbg_warn_e57696dbb3977030(arg0) {
    console.warn(getObject(arg0));
};

function __wbg_addEventListener_615d4590d38da1c9() { return handleError(function (arg0, arg1, arg2, arg3) {
    getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3));
}, arguments) };

function __wbg_addEventListener_cf5b03cd29763277() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3), getObject(arg4));
}, arguments) };

function __wbg_removeEventListener_343e3ea9fe4c8533() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).removeEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3), getObject(arg4));
}, arguments) };

function __wbg_charCode_504e79c3e550d1bb(arg0) {
    const ret = getObject(arg0).charCode;
    return ret;
};

function __wbg_keyCode_b33194be2ceec53b(arg0) {
    const ret = getObject(arg0).keyCode;
    return ret;
};

function __wbg_altKey_dff2a075455ac01b(arg0) {
    const ret = getObject(arg0).altKey;
    return ret;
};

function __wbg_ctrlKey_993b558f853d64ce(arg0) {
    const ret = getObject(arg0).ctrlKey;
    return ret;
};

function __wbg_shiftKey_31e62e9d172b26f0(arg0) {
    const ret = getObject(arg0).shiftKey;
    return ret;
};

function __wbg_metaKey_9f0f19692d0498bd(arg0) {
    const ret = getObject(arg0).metaKey;
    return ret;
};

function __wbg_key_f0decac219aa904b(arg0, arg1) {
    const ret = getObject(arg1).key;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

function __wbg_code_aed21120de275a12(arg0, arg1) {
    const ret = getObject(arg1).code;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

function __wbg_getModifierState_03b72700dbe33ad6(arg0, arg1, arg2) {
    const ret = getObject(arg0).getModifierState(getStringFromWasm0(arg1, arg2));
    return ret;
};

function __wbg_appendChild_b8199dc1655c852d() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).appendChild(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_target_b629c177f9bee3da(arg0) {
    const ret = getObject(arg0).target;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_cancelBubble_c9a8182589205d54(arg0) {
    const ret = getObject(arg0).cancelBubble;
    return ret;
};

function __wbg_preventDefault_16b2170b12f56317(arg0) {
    getObject(arg0).preventDefault();
};

function __wbg_stopPropagation_7647c9985222f9b0(arg0) {
    getObject(arg0).stopPropagation();
};

function __wbg_get_27fe3dac1c4d0224(arg0, arg1) {
    const ret = getObject(arg0)[arg1 >>> 0];
    return addHeapObject(ret);
};

function __wbg_length_e498fbc24f9c1d4f(arg0) {
    const ret = getObject(arg0).length;
    return ret;
};

function __wbg_new_b525de17f44a8943() {
    const ret = new Array();
    return addHeapObject(ret);
};

function __wbg_newnoargs_2b8b6bd7753c76ba(arg0, arg1) {
    const ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

function __wbg_get_baf4855f9a986186() { return handleError(function (arg0, arg1) {
    const ret = Reflect.get(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_call_95d1ea488d03e4e8() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_new_f9876326328f45ed() {
    const ret = new Object();
    return addHeapObject(ret);
};

function __wbg_self_e7c1f827057f6584() { return handleError(function () {
    const ret = self.self;
    return addHeapObject(ret);
}, arguments) };

function __wbg_window_a09ec664e14b1b81() { return handleError(function () {
    const ret = window.window;
    return addHeapObject(ret);
}, arguments) };

function __wbg_globalThis_87cbb8506fecf3a9() { return handleError(function () {
    const ret = globalThis.globalThis;
    return addHeapObject(ret);
}, arguments) };

function __wbg_global_c85a9259e621f3db() { return handleError(function () {
    const ret = global.global;
    return addHeapObject(ret);
}, arguments) };

function __wbindgen_is_undefined(arg0) {
    const ret = getObject(arg0) === undefined;
    return ret;
};

function __wbg_of_892d7838f8e4cc20(arg0) {
    const ret = Array.of(getObject(arg0));
    return addHeapObject(ret);
};

function __wbg_push_49c286f04dd3bf59(arg0, arg1) {
    const ret = getObject(arg0).push(getObject(arg1));
    return ret;
};

function __wbg_call_9495de66fdbe016b() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
}, arguments) };

function __wbg_is_8f1618fe9a4fd388(arg0, arg1) {
    const ret = Object.is(getObject(arg0), getObject(arg1));
    return ret;
};

function __wbg_new_9d3a9ce4282a18a8(arg0, arg1) {
    try {
        var state0 = {a: arg0, b: arg1};
        var cb0 = (arg0, arg1) => {
            const a = state0.a;
            state0.a = 0;
            try {
                return __wbg_adapter_671(a, state0.b, arg0, arg1);
            } finally {
                state0.a = a;
            }
        };
        const ret = new Promise(cb0);
        return addHeapObject(ret);
    } finally {
        state0.a = state0.b = 0;
    }
};

function __wbg_resolve_fd40f858d9db1a04(arg0) {
    const ret = Promise.resolve(getObject(arg0));
    return addHeapObject(ret);
};

function __wbg_then_ec5db6d509eb475f(arg0, arg1) {
    const ret = getObject(arg0).then(getObject(arg1));
    return addHeapObject(ret);
};

function __wbg_buffer_cf65c07de34b9a08(arg0) {
    const ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};

function __wbg_newwithbyteoffsetandlength_55f9ffb569d9fa74(arg0, arg1, arg2) {
    const ret = new Int8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

function __wbg_newwithbyteoffsetandlength_f477e654086cbbb6(arg0, arg1, arg2) {
    const ret = new Int16Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

function __wbg_newwithbyteoffsetandlength_b57a602974d4b1cd(arg0, arg1, arg2) {
    const ret = new Int32Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

function __wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5(arg0, arg1, arg2) {
    const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

function __wbg_newwithbyteoffsetandlength_9241d9d251418ebf(arg0, arg1, arg2) {
    const ret = new Uint16Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

function __wbg_newwithbyteoffsetandlength_5c5a6e21987c3bee(arg0, arg1, arg2) {
    const ret = new Uint32Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

function __wbg_newwithbyteoffsetandlength_4078d56428eb2926(arg0, arg1, arg2) {
    const ret = new Float32Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

function __wbg_set_6aa458a4ebdb65cb() { return handleError(function (arg0, arg1, arg2) {
    const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
    return ret;
}, arguments) };

function __wbindgen_debug_string(arg0, arg1) {
    const ret = debugString(getObject(arg1));
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

function __wbindgen_memory() {
    const ret = wasm.memory;
    return addHeapObject(ret);
};

function __wbindgen_closure_wrapper805(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 179, __wbg_adapter_26);
    return addHeapObject(ret);
};

function __wbindgen_closure_wrapper807(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 179, __wbg_adapter_26);
    return addHeapObject(ret);
};

function __wbindgen_closure_wrapper809(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 179, __wbg_adapter_26);
    return addHeapObject(ret);
};

function __wbindgen_closure_wrapper811(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 179, __wbg_adapter_26);
    return addHeapObject(ret);
};

function __wbindgen_closure_wrapper813(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 179, __wbg_adapter_26);
    return addHeapObject(ret);
};

function __wbindgen_closure_wrapper815(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 179, __wbg_adapter_26);
    return addHeapObject(ret);
};

function __wbindgen_closure_wrapper817(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 179, __wbg_adapter_26);
    return addHeapObject(ret);
};

function __wbindgen_closure_wrapper819(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 179, __wbg_adapter_26);
    return addHeapObject(ret);
};

function __wbindgen_closure_wrapper821(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 179, __wbg_adapter_43);
    return addHeapObject(ret);
};

function __wbindgen_closure_wrapper952(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 250, __wbg_adapter_46);
    return addHeapObject(ret);
};

function __wbindgen_closure_wrapper3709(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 1262, __wbg_adapter_49);
    return addHeapObject(ret);
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/spectral_graph/spectral_graph_bg.wasm":
/*!************************************************************!*\
  !*** ./node_modules/spectral_graph/spectral_graph_bg.wasm ***!
  \************************************************************/
/*! exports provided: memory, __wbg_waterfallgraph_free, waterfallgraph_new, waterfallgraph_debug_data, waterfallgraph_add_data, waterfallgraph_set_slider_position, waterfallgraph_get_slider_position, waterfallgraph_get_mouse_value, waterfallgraph_run, __wbg_eventloopjs_free, eventloopjs_new, __wbg_webgpugraphjs_free, webgpugraphjs_New, webgpugraphjs_Init, webgpugraphjs_UpdateTextureFromData, webgpugraphjs_Run, __wbg_webgpugraph_free, __wbg_webglgraph_free, webglgraph_new, webglgraph_load_data, webglgraph_run, wgpu_compute_pass_set_pipeline, wgpu_compute_pass_set_bind_group, wgpu_compute_pass_set_push_constant, wgpu_compute_pass_insert_debug_marker, wgpu_compute_pass_push_debug_group, wgpu_compute_pass_pop_debug_group, wgpu_compute_pass_write_timestamp, wgpu_compute_pass_begin_pipeline_statistics_query, wgpu_compute_pass_end_pipeline_statistics_query, wgpu_compute_pass_dispatch_workgroups, wgpu_compute_pass_dispatch_workgroups_indirect, wgpu_render_pass_set_pipeline, wgpu_render_pass_set_bind_group, wgpu_render_pass_set_vertex_buffer, wgpu_render_pass_set_push_constants, wgpu_render_pass_draw, wgpu_render_pass_draw_indexed, wgpu_render_pass_draw_indirect, wgpu_render_pass_draw_indexed_indirect, wgpu_render_pass_multi_draw_indirect, wgpu_render_pass_multi_draw_indexed_indirect, wgpu_render_pass_multi_draw_indirect_count, wgpu_render_pass_multi_draw_indexed_indirect_count, wgpu_render_pass_set_blend_constant, wgpu_render_pass_set_scissor_rect, wgpu_render_pass_set_viewport, wgpu_render_pass_set_stencil_reference, wgpu_render_pass_insert_debug_marker, wgpu_render_pass_push_debug_group, wgpu_render_pass_pop_debug_group, wgpu_render_pass_write_timestamp, wgpu_render_pass_begin_pipeline_statistics_query, wgpu_render_pass_end_pipeline_statistics_query, wgpu_render_bundle_set_pipeline, wgpu_render_bundle_set_bind_group, wgpu_render_bundle_set_vertex_buffer, wgpu_render_bundle_set_push_constants, wgpu_render_bundle_draw, wgpu_render_bundle_draw_indexed, wgpu_render_bundle_draw_indirect, wgpu_render_bundle_draw_indexed_indirect, wgpu_render_bundle_set_index_buffer, wgpu_render_bundle_pop_debug_group, wgpu_render_bundle_insert_debug_marker, wgpu_render_pass_set_index_buffer, wgpu_render_pass_execute_bundles, wgpu_render_bundle_push_debug_group, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_export_2, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0d6d4a2aa4e305aa, _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3fe02e25275af17e, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h837946e50862391f, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hb90c4e155ca8d91e, __wbindgen_add_to_stack_pointer, __wbindgen_free, __wbindgen_exn_store, wasm_bindgen__convert__closures__invoke2_mut__h7a9944eeaf44bae4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name != "__webpack_init__") exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(/*! ./spectral_graph_bg.js */ "./node_modules/spectral_graph/spectral_graph_bg.js");


// exec wasm module
wasmExports["__webpack_init__"]()

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

}]);
//# sourceMappingURL=0.bootstrap.js.map