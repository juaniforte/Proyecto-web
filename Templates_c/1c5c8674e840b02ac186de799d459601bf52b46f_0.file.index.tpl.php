<?php
/* Smarty version 3.1.30, created on 2016-09-27 21:26:38
  from "C:\xampp\htdocs\proyectos\Proyecto\templates\index.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_57eac7eeed85a9_79262266',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '1c5c8674e840b02ac186de799d459601bf52b46f' => 
    array (
      0 => 'C:\\xampp\\htdocs\\proyectos\\Proyecto\\templates\\index.tpl',
      1 => 1475001855,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:header.tpl' => 1,
    'file:footer.tpl' => 1,
  ),
),false)) {
function content_57eac7eeed85a9_79262266 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_subTemplateRender("file:header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>


<div class="container">
    <div class="row" id="mostrador">
      <!-- En esta seccion se cargaran los contenedores aue contienen codigo html de cada seccion! -->
    </div>
  </div>

<?php $_smarty_tpl->_subTemplateRender("file:footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>


<?php $_smarty_debug = new Smarty_Internal_Debug;
 $_smarty_debug->display_debug($_smarty_tpl);
unset($_smarty_debug);
}
}
