import { BaseSchemes } from 'rete'
import { NgElement as NgEl, NgElementStrategy } from '@angular/elements';
import { AngularRenderPlugin } from '.'

export type ExtraRender = { type: 'render', data: any } | { type: 'rendered', data: any }

export type RenderPreset<Schemes extends BaseSchemes, T extends ExtraRender> = {
  update: (context: T, plugin: AngularRenderPlugin<Schemes, T>) => Record<string, unknown> | null
  mount: (context: T, plugin: AngularRenderPlugin<Schemes, T>) => { key: string, component: any, props: Record<string, unknown> } | undefined | null | void
}

export type NgElement = NgEl & { ngElementStrategy: NgElementStrategy & { setInputValue(key: string, value: any): void } }
export type NodeProps = { data: any, rendered: any, emit: any } & NgElement

export type Position = { x: number, y: number }