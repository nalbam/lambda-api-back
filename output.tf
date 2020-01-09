# output

output "url" {
  value = "https://${module.dev-lambda.domain}/back"
}

output "invoke_url" {
  value = "${module.dev-lambda.invoke_url}"
}
