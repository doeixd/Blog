import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, m as insert_dev, n as append_dev, o as noop } from './client.75fcb5b4.js';

/* src/routes/projects.svelte generated by Svelte v3.24.1 */

const file = "src/routes/projects.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let ul;
	let li0;
	let t3;
	let t4;
	let li1;
	let t5;
	let t6;
	let li2;
	let t7;
	let t8;
	let li3;
	let t9;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Projects");
			t2 = space();
			ul = element("ul");
			li0 = element("li");
			t3 = text("Social Network");
			t4 = space();
			li1 = element("li");
			t5 = text("Digital Resturant");
			t6 = space();
			li2 = element("li");
			t7 = text("Podcast Player");
			t8 = space();
			li3 = element("li");
			t9 = text("This Blog");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-5oeyam\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Projects");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			ul = claim_element(nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			t3 = claim_text(li0_nodes, "Social Network");
			li0_nodes.forEach(detach_dev);
			t4 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			t5 = claim_text(li1_nodes, "Digital Resturant");
			li1_nodes.forEach(detach_dev);
			t6 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			t7 = claim_text(li2_nodes, "Podcast Player");
			li2_nodes.forEach(detach_dev);
			t8 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", {});
			var li3_nodes = children(li3);
			t9 = claim_text(li3_nodes, "This Blog");
			li3_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Projects";
			add_location(h1, file, 6, 0, 57);
			add_location(li0, file, 9, 0, 81);
			add_location(li1, file, 10, 0, 105);
			add_location(li2, file, 11, 0, 132);
			add_location(li3, file, 12, 0, 156);
			add_location(ul, file, 8, 0, 76);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, ul, anchor);
			append_dev(ul, li0);
			append_dev(li0, t3);
			append_dev(ul, t4);
			append_dev(ul, li1);
			append_dev(li1, t5);
			append_dev(ul, t6);
			append_dev(ul, li2);
			append_dev(li2, t7);
			append_dev(ul, t8);
			append_dev(ul, li3);
			append_dev(li3, t9);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(ul);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Projects> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Projects", $$slots, []);
	return [];
}

class Projects extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Projects",
			options,
			id: create_fragment.name
		});
	}
}

export default Projects;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuOTUxMjFkMzQuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
