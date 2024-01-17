const formModel = inject('formModel')
onMounted(async ()=>{

  await useAuditAssetFormFetch(formModel);
  //scroll
  const element = document.getElementById('form-modal-audit')
  const el = element.parentElement
  el.addEventListener('scroll', scrollAnchor )
})
