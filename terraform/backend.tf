terraform {
  backend "s3" {
    bucket         = "banking-terraform-state"
    key            = "dev/terraform.tfstate"
    region         = "us-west-2"
    use_lockfile = "true"
  }
}

