

const menuConfig = {
	groups: [
		{
			id: 1,
			title: "Main Navigation",
			items: [
				{
					id: "home",
					label: "Home",
					icon: "fa-house",
					hasSubmenu: true,
					submenu: [
						{ id: "dashboard", label: "Dashboard" },
						{ id: "overview", label: "Overview" },
						{ id: "notifications", label: "Notifications" }
					]
				},
				{
					id: "reports",
					label: "Reports",
					icon: "fa-chart-simple",
					hasSubmenu: true,
					submenu: [
						{ id: "analytics", label: "Analytics" },
						{ id: "dashboard", label: "Dashboard" },
						{ id: "statistics", label: "Statistics" }
					]
				},
				{
					id: "files",
					label: "Files",
					icon: "fa-folder-open",
					hasSubmenu: true,
					submenu: [
						{ id: "documents", label: "Documents" },
						{ id: "images", label: "Images" },
						{ id: "videos", label: "Videos" }
					]
				},
				{
					id: "calendar",
					label: "Calendar",
					icon: "fa-calendar-days",
					hasSubmenu: true,
					submenu: [
						{ id: "events", label: "Events" },
						{ id: "schedule", label: "Schedule" },
						{ id: "add-event", label: "Add Event" }
					]
				}
			]
		},
		{
			id: 2,
			title: "Analytics",
			items: [
				{
					id: "analytics",
					label: "Analytics",
					icon: "fa-chart-line",
					hasSubmenu: true,
					submenu: [
						{ id: "traffic", label: "Traffic" },
						{ id: "users", label: "Users" },
						{ id: "views", label: "Views" }
					]
				},
				{
					id: "dashboard",
					label: "Dashboard",
					icon: "fa-chart-pie",
					hasSubmenu: true,
					submenu: [
						{ id: "overview", label: "Overview" },
						{ id: "charts", label: "Charts" },
						{ id: "tables", label: "Tables" }
					]
				},
				{
					id: "statistics",
					label: "Statistics",
					icon: "fa-chart-bar",
					hasSubmenu: true,
					submenu: [
						{ id: "sales", label: "Sales" },
						{ id: "revenue", label: "Revenue" },
						{ id: "growth", label: "Growth" }
					]
				},
				{
					id: "charts",
					label: "Charts",
					icon: "fa-chart-area",
					hasSubmenu: true,
					submenu: [
						{ id: "area-charts", label: "Area Charts" },
						{ id: "line-charts", label: "Line Charts" },
						{ id: "bar-charts", label: "Bar Charts" }
					]
				}
			]
		},
		{
			id: 3,
			title: "Settings",
			items: [
				{
					id: "settings",
					label: "Settings",
					icon: "fa-gear",
					hasSubmenu: true,
					submenu: [
						{ id: "general", label: "General" },
						{ id: "appearance", label: "Appearance" },
						{ id: "language", label: "Language" }
					]
				},
				{
					id: "profile",
					label: "Profile",
					icon: "fa-user",
					hasSubmenu: true,
					submenu: [
						{ id: "edit-profile", label: "Edit Profile" },
						{ id: "avatar", label: "Avatar" },
						{ id: "change-password", label: "Change Password" }
					]
				},
				{
					id: "notifications",
					label: "Notifications",
					icon: "fa-bell",
					hasSubmenu: true,
					submenu: [
						{ id: "email", label: "Email" },
						{ id: "push", label: "Push" },
						{ id: "preferences", label: "Preferences" }
					]
				},
				{
					id: "security",
					label: "Security",
					icon: "fa-shield",
					hasSubmenu: true,
					submenu: [
						{ id: "privacy", label: "Privacy" },
						{ id: "two-factor", label: "Two-Factor" },
						{ id: "activity", label: "Activity" }
					]
				}
			]
		},
		{
			id: 4,
			title: "Help & Support",
			items: [
				{
					id: "help",
					label: "Help",
					icon: "fa-question",
					hasSubmenu: true,
					submenu: [
						{ id: "faq", label: "FAQ" },
						{ id: "search", label: "Search" },
						{ id: "tips", label: "Tips" }
					]
				},
				{
					id: "documentation",
					label: "Documentation",
					icon: "fa-book",
					hasSubmenu: true,
					submenu: [
						{ id: "guides", label: "Guides" },
						{ id: "api-docs", label: "API Docs" },
						{ id: "tutorials", label: "Tutorials" }
					]
				},
				{
					id: "support",
					label: "Support",
					icon: "fa-comments",
					hasSubmenu: true,
					submenu: [
						{ id: "tickets", label: "Tickets" },
						{ id: "chat", label: "Chat" },
						{ id: "contact", label: "Contact" }
					]
				},
				{
					id: "about",
					label: "About",
					icon: "fa-info",
					hasSubmenu: true,
					submenu: [
						{ id: "company", label: "Company" },
						{ id: "team", label: "Team" },
						{ id: "version", label: "Version" }
					]
				}
			]
		}
	]
};


function generateMenu() {
	const menuContainer = document.querySelector('#sidebar .menu');
	menuContainer.innerHTML = '';

	menuConfig.groups.forEach(group => {
		const groupDiv = document.createElement('div');
		groupDiv.className = 'group';
		groupDiv.setAttribute('data-menu-group', group.id);
		if (group.id !== 1) {
			groupDiv.style.display = 'none';
		}

		group.items.forEach(item => {
			const itemDiv = document.createElement('div');
			itemDiv.className = `item ${item.hasSubmenu ? 'has-submenu' : ''}`;

			if (item.hasSubmenu) {
				const mainLinkDiv = document.createElement('div');
				mainLinkDiv.className = 'menu_item_main_link';

				mainLinkDiv.innerHTML = `
					<div class="icon"><i class="fa-solid ${item.icon}"></i></div>
					<div class="label">${item.label}</div>
					<div class="tooltip">${item.label}</div>
					<div class="submenu-arrow"><i class="fa-solid fa-chevron-down"></i></div>
        `;

				const submenuDiv = document.createElement('div');
				submenuDiv.className = 'submenu';

				item.submenu.forEach(subItem => {
					const submenuItemDiv = document.createElement('div');
					submenuItemDiv.className = 'submenu-item';
					submenuItemDiv.innerHTML = `
                                <div class="submenu-label">${subItem.label}</div>
                            `;
					submenuDiv.appendChild(submenuItemDiv);
				});

				itemDiv.appendChild(mainLinkDiv);
				itemDiv.appendChild(submenuDiv);
			} else {
				itemDiv.innerHTML = `
                            <div class="icon"><i class="fa-solid fa-${item.icon}"></i></div>
                            <div class="label">${item.label}</div>
                            <div class="tooltip">${item.label}</div>
                        `;
			}

			groupDiv.appendChild(itemDiv);
		});

		menuContainer.appendChild(groupDiv);
	});
}

(function () {
	const sidebar = document.getElementById('sidebar');
	const btn = document.getElementById('toggle');
	const chev = btn.querySelector('.chev');


	generateMenu();

	function setCollapsed(collapsed) {
		if (collapsed) sidebar.classList.add('collapsed'); else sidebar.classList.remove('collapsed');
	}


	function responsive() {
		if (window.innerWidth <= 920) {
			sidebar.classList.add('collapsed', 'auto-collapsed');
			chev.classList.remove('fa-chevron-left'); chev.classList.add('fa-chevron-right');
		} else {
			sidebar.classList.remove('auto-collapsed');

		}
	}


	const THEME_KEY = 'theme';
	const themeBtn = document.getElementById('theme-toggle');

	function applyTheme(theme) {
		if (!theme) return;
		document.documentElement.setAttribute('data-theme', theme);
		if (themeBtn) {
			if (theme === 'light') {
				themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
				themeBtn.setAttribute('aria-label', 'Switch to dark theme');
			} else {
				themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
				themeBtn.setAttribute('aria-label', 'Switch to light theme');
			}
		}
	}


	let savedTheme = null;
	try { savedTheme = localStorage.getItem(THEME_KEY); } catch (e) { /* ignore */ }
	if (!savedTheme) {
		const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
		savedTheme = prefersLight ? 'light' : 'dark';
	}
	applyTheme(savedTheme);

	if (themeBtn) {
		themeBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
			const next = current === 'light' ? 'dark' : 'light';
			applyTheme(next);
			try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* ignore */ }
		});
	}
	function openMobileMenu() {
		if (window.innerWidth <= 920) {
			const header_icon = document.querySelector('.sidebar_menu .header');
			header_icon.addEventListener('click', function () {
				document.querySelector('#sidebar').style.left = "77px";
			})
		}
	}
	openMobileMenu();

	responsive(); window.addEventListener('resize', responsive, openMobileMenu);

	btn.addEventListener('click', () => {
		const collapsed = sidebar.classList.toggle('collapsed');
		if (collapsed) { chev.classList.remove('fa-chevron-left'); chev.classList.add('fa-chevron-right'); }
		else { chev.classList.remove('fa-chevron-right'); chev.classList.add('fa-chevron-left'); }
	});


	document.addEventListener('click', (e) => {
		if (window.innerWidth <= 520) {
			if (sidebar.contains(e.target)) return;

			sidebar.classList.add('collapsed');
		}
	});


	window.addEventListener('keydown', (e) => { if (e.key.toLowerCase() === 'h') { btn.click(); } });


	document.querySelectorAll('.item').forEach(it => { it.tabIndex = 0; it.addEventListener('keydown', (e) => { if (e.key === 'Enter') { it.classList.toggle('active'); } }) });


	document.querySelectorAll('.item.has-submenu').forEach(item => {
		item.addEventListener('click', (e) => {

			if (e.target.closest('.submenu-item')) return;


			document.querySelectorAll('.item.has-submenu.expanded').forEach(other => {
				if (other !== item) {
					other.classList.remove('expanded');
				}
			});


			item.classList.toggle('expanded');
		});
	});


	document.querySelectorAll('.submenu-item').forEach(subItem => {
		subItem.addEventListener('click', (e) => {
			e.stopPropagation();


			document.querySelectorAll('.submenu-item').forEach(item => item.classList.remove('active'));


			subItem.classList.add('active');
		});
	});


	document.querySelectorAll('#sidebar_menu .item[data-group]').forEach(iconItem => {
		iconItem.addEventListener('click', () => {
			const targetGroup = iconItem.getAttribute('data-group');


			document.querySelectorAll('#sidebar_menu .item').forEach(item => item.classList.remove('active'));


			iconItem.classList.add('active');


			document.querySelectorAll('#sidebar .group[data-menu-group]').forEach(group => {
				group.style.display = 'none';
			});


			const targetGroupElement = document.querySelector(`#sidebar .group[data-menu-group="${targetGroup}"]`);
			if (targetGroupElement) {
				targetGroupElement.style.display = 'flex';


				const sectionTitle = document.querySelector('.section-title');
				const groupConfig = menuConfig.groups.find(g => g.id == targetGroup);
				if (sectionTitle && groupConfig) {
					sectionTitle.textContent = groupConfig.title;
				}


				setTimeout(() => {
					targetGroupElement.style.opacity = '1';
					targetGroupElement.style.transform = 'translateY(0)';
				}, 10);
			}
		});
	});
})();
