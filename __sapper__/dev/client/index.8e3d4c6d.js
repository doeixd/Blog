import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as set_style, m as insert_dev, n as append_dev, o as noop } from './client.1cd2ecfb.js';

/* src/routes/index.svelte generated by Svelte v3.24.1 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let div1;
	let img;
	let img_src_value;
	let t3;
	let span2;
	let b0;
	let t4;
	let t5;
	let span0;
	let t6;
	let span1;
	let t7;
	let t8;
	let br0;
	let t9;
	let b1;
	let t10;
	let t11;
	let br1;
	let b2;
	let t12;
	let t13;
	let div0;
	let a0;
	let t14;
	let t15;
	let a1;
	let t16;
	let t17;
	let a2;
	let t18;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Patrick Glenn");
			t2 = space();
			div1 = element("div");
			img = element("img");
			t3 = space();
			span2 = element("span");
			b0 = element("b");
			t4 = text("I am");
			t5 = text(" a web developer from ");
			span0 = element("span");
			t6 = text("Green ");
			span1 = element("span");
			t7 = text("Bay");
			t8 = text(", WI.\n  ");
			br0 = element("br");
			t9 = space();
			b1 = element("b");
			t10 = text("I love");
			t11 = text(" cooking, playing music, and spending time with my loved ones.\n  ");
			br1 = element("br");
			b2 = element("b");
			t12 = text("I work");
			t13 = text("  with Javascript, Typescript, React, and Svelte\n\n\t");
			div0 = element("div");
			a0 = element("a");
			t14 = text("Twitter");
			t15 = space();
			a1 = element("a");
			t16 = text("Email");
			t17 = space();
			a2 = element("a");
			t18 = text("Github");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-ilh2qc\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Patrick Glenn");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { id: true, class: true });
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true });
			t3 = claim_space(div1_nodes);
			span2 = claim_element(div1_nodes, "SPAN", { id: true, class: true });
			var span2_nodes = children(span2);
			b0 = claim_element(span2_nodes, "B", {});
			var b0_nodes = children(b0);
			t4 = claim_text(b0_nodes, "I am");
			b0_nodes.forEach(detach_dev);
			t5 = claim_text(span2_nodes, " a web developer from ");
			span0 = claim_element(span2_nodes, "SPAN", { style: true });
			var span0_nodes = children(span0);
			t6 = claim_text(span0_nodes, "Green ");
			span0_nodes.forEach(detach_dev);
			span1 = claim_element(span2_nodes, "SPAN", { style: true });
			var span1_nodes = children(span1);
			t7 = claim_text(span1_nodes, "Bay");
			span1_nodes.forEach(detach_dev);
			t8 = claim_text(span2_nodes, ", WI.\n  ");
			br0 = claim_element(span2_nodes, "BR", {});
			t9 = claim_space(span2_nodes);
			b1 = claim_element(span2_nodes, "B", {});
			var b1_nodes = children(b1);
			t10 = claim_text(b1_nodes, "I love");
			b1_nodes.forEach(detach_dev);
			t11 = claim_text(span2_nodes, " cooking, playing music, and spending time with my loved ones.\n  ");
			br1 = claim_element(span2_nodes, "BR", {});
			b2 = claim_element(span2_nodes, "B", {});
			var b2_nodes = children(b2);
			t12 = claim_text(b2_nodes, "I work");
			b2_nodes.forEach(detach_dev);
			t13 = claim_text(span2_nodes, "  with Javascript, Typescript, React, and Svelte\n\n\t");
			div0 = claim_element(span2_nodes, "DIV", { id: true, class: true });
			var div0_nodes = children(div0);
			a0 = claim_element(div0_nodes, "A", { href: true, style: true, class: true });
			var a0_nodes = children(a0);
			t14 = claim_text(a0_nodes, "Twitter");
			a0_nodes.forEach(detach_dev);
			t15 = claim_space(div0_nodes);
			a1 = claim_element(div0_nodes, "A", { href: true, style: true, class: true });
			var a1_nodes = children(a1);
			t16 = claim_text(a1_nodes, "Email");
			a1_nodes.forEach(detach_dev);
			t17 = claim_space(div0_nodes);
			a2 = claim_element(div0_nodes, "A", { href: true, style: true, class: true });
			var a2_nodes = children(a2);
			t18 = claim_text(a2_nodes, "Github");
			a2_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			span2_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Patrick W. M. Glenn";
			attr_dev(h1, "class", "svelte-1kchgp0");
			add_location(h1, file, 79, 0, 1021);
			if (img.src !== (img_src_value = "/faced-min.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "My Beautiful Face");
			attr_dev(img, "class", "svelte-1kchgp0");
			add_location(img, file, 82, 0, 1061);
			add_location(b0, file, 83, 22, 1135);
			set_style(span0, "color", "green");
			add_location(span0, file, 83, 55, 1168);
			set_style(span1, "color", "gold");
			add_location(span1, file, 83, 94, 1207);
			add_location(br0, file, 84, 2, 1251);
			add_location(b1, file, 84, 8, 1257);
			add_location(br1, file, 85, 2, 1335);
			add_location(b2, file, 85, 8, 1341);
			attr_dev(a0, "href", "http://twitter.com/RelevantElement");
			set_style(a0, "color", "#29a2ff");
			attr_dev(a0, "class", "svelte-1kchgp0");
			add_location(a0, file, 88, 2, 1424);
			attr_dev(a1, "href", "mailto:ithepatrickglenni@gmail.com");
			set_style(a1, "color", "#9dff00");
			attr_dev(a1, "class", "svelte-1kchgp0");
			add_location(a1, file, 92, 2, 1513);
			attr_dev(a2, "href", "github.com/doeixd");
			set_style(a2, "color", "#ff7420");
			attr_dev(a2, "class", "svelte-1kchgp0");
			add_location(a2, file, 96, 2, 1601);
			attr_dev(div0, "id", "links");
			attr_dev(div0, "class", "svelte-1kchgp0");
			add_location(div0, file, 87, 1, 1405);
			attr_dev(span2, "id", "statement");
			attr_dev(span2, "class", "svelte-1kchgp0");
			add_location(span2, file, 83, 0, 1113);
			attr_dev(div1, "id", "left");
			attr_dev(div1, "class", "svelte-1kchgp0");
			add_location(div1, file, 81, 0, 1045);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, img);
			append_dev(div1, t3);
			append_dev(div1, span2);
			append_dev(span2, b0);
			append_dev(b0, t4);
			append_dev(span2, t5);
			append_dev(span2, span0);
			append_dev(span0, t6);
			append_dev(span2, span1);
			append_dev(span1, t7);
			append_dev(span2, t8);
			append_dev(span2, br0);
			append_dev(span2, t9);
			append_dev(span2, b1);
			append_dev(b1, t10);
			append_dev(span2, t11);
			append_dev(span2, br1);
			append_dev(span2, b2);
			append_dev(b2, t12);
			append_dev(span2, t13);
			append_dev(span2, div0);
			append_dev(div0, a0);
			append_dev(a0, t14);
			append_dev(div0, t15);
			append_dev(div0, a1);
			append_dev(a1, t16);
			append_dev(div0, t17);
			append_dev(div0, a2);
			append_dev(a2, t18);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOGUzZDRjNmQuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
