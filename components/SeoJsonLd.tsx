export function SeoJsonLd({data}:{data:Record<string,unknown>|Record<string,unknown>[]}){return <script type='application/ld+json' dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>}
