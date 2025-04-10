import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["name"]

  greet() {
    alert(`This is from stimulus, ${this.nameTarget.value}!`)
  }
}
