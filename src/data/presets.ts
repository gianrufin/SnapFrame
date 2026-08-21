import { GradientPreset, SampleScreenshot, KotlinCodeSnippet, AppRelease } from '../types';

export const GRADIENT_PRESETS: GradientPreset[] = [
  {
    id: 'studio-graphite',
    name: 'Studio Graphite',
    category: 'minimal',
    colors: ['#27272a', '#18181b', '#09090b'],
    angle: 180,
    type: 'linear',
  },
  {
    id: 'neutral-slate',
    name: 'Neutral Slate',
    category: 'minimal',
    colors: ['#334155', '#1e293b', '#0f172a'],
    angle: 145,
    type: 'linear',
  },
  {
    id: 'pure-frost',
    name: 'Architect Chalk',
    category: 'minimal',
    colors: ['#f8fafc', '#e2e8f0', '#cbd5e1'],
    angle: 180,
    type: 'linear',
  },
  {
    id: 'deep-obsidian',
    name: 'Obsidian Matte',
    category: 'dark',
    colors: ['#121316', '#1a1d24', '#0d0e12'],
    angle: 135,
    type: 'linear',
  },
  {
    id: 'linear-indigo',
    name: 'Linear Indigo',
    category: 'vibrant',
    colors: ['#4338ca', '#312e81', '#1e1b4b'],
    angle: 135,
    type: 'linear',
  },
  {
    id: 'nordic-aurora',
    name: 'Nordic Forest',
    category: 'dark',
    colors: ['#064e3b', '#022c22', '#0f172a'],
    angle: 140,
    type: 'linear',
  },
  {
    id: 'warm-amber',
    name: 'Warm Ochre',
    category: 'sunset',
    colors: ['#b45309', '#78350f', '#451a03'],
    angle: 135,
    type: 'linear',
  },
  {
    id: 'cad-blueprint',
    name: 'CAD Blueprint',
    category: 'cyber',
    colors: ['#0369a1', '#075985', '#0c4a6e'],
    angle: 160,
    type: 'linear',
  },
  {
    id: 'subtle-mesh-slate',
    name: 'Studio Diffuse',
    category: 'mesh',
    colors: ['#334155', '#475569', '#1e293b', '#0f172a'],
    type: 'mesh',
  },
  {
    id: 'subtle-mesh-indigo',
    name: 'Monochrome Velvet',
    category: 'mesh',
    colors: ['#374151', '#1f2937', '#111827', '#030712'],
    type: 'mesh',
  },
  {
    id: 'radial-spotlight',
    name: 'Studio Key Light',
    category: 'minimal',
    colors: ['#3f3f46', '#18181b', '#09090b'],
    type: 'radial',
  },
  {
    id: 'titanium-mist',
    name: 'Titanium Raw',
    category: 'minimal',
    colors: ['#e4e4e7', '#a1a1aa', '#52525b'],
    angle: 135,
    type: 'linear',
  },
];

// Precision vector sample mockups
export const SAMPLE_SCREENSHOTS: SampleScreenshot[] = [
  {
    id: 'code-editor',
    name: 'Jetpack Compose Composable',
    category: 'Developer',
    aspectRatio: '16/10',
    url: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="900" height="540" viewBox="0 0 900 540" fill="#0d1117">
        <rect width="900" height="540" fill="#0d1117" />
        <rect x="0" y="0" width="900" height="40" fill="#161b22" />
        <circle cx="20" cy="20" r="5" fill="#ff5f56" />
        <circle cx="36" cy="20" r="5" fill="#ffbd2e" />
        <circle cx="52" cy="20" r="5" fill="#27c93f" />
        <text x="80" y="25" fill="#8b949e" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="500">DeviceMockupS27.kt — module:ui</text>
        
        <g font-family="'JetBrains Mono', monospace" font-size="13" line-height="24">
          <text x="32" y="76" fill="#ff7b72">package</text> <text x="100" y="76" fill="#c9d1d9">com.snapframe.app.ui.components</text>
          
          <text x="32" y="112" fill="#ff7b72">import</text> <text x="90" y="112" fill="#79c0ff">androidx.compose.runtime.Composable</text>
          <text x="32" y="136" fill="#ff7b72">import</text> <text x="90" y="136" fill="#79c0ff">androidx.compose.ui.graphics.RenderEffect</text>
          <text x="32" y="160" fill="#ff7b72">import</text> <text x="90" y="160" fill="#79c0ff">androidx.compose.ui.graphics.asComposeRenderEffect</text>
          
          <text x="32" y="206" fill="#d2a8ff">@Composable</text>
          <text x="32" y="232" fill="#ff7b72">fun</text> <text x="65" y="232" fill="#d2a8ff">SamsungS27UltraFrame</text><text x="235" y="232" fill="#c9d1d9">(</text>
          <text x="64" y="260" fill="#79c0ff">modifier</text><text x="130" y="260" fill="#c9d1d9">: Modifier = Modifier,</text>
          <text x="64" y="286" fill="#79c0ff">titaniumBezelWidth</text><text x="210" y="286" fill="#c9d1d9">: Dp = 1.1.dp,</text>
          <text x="64" y="312" fill="#79c0ff">renderEffect</text><text x="165" y="312" fill="#c9d1d9">: RenderEffect? = null</text>
          <text x="32" y="338" fill="#c9d1d9">) {</text>
          <text x="64" y="372" fill="#7ee787">// Hardware GPU Blur pipeline for Android 12+</text>
          <text x="64" y="400" fill="#c9d1d9">Canvas(modifier = modifier.fillMaxSize()) {</text>
          <text x="96" y="428" fill="#d2a8ff">drawTitaniumChassis</text><text x="250" y="428" fill="#c9d1d9">(radius = 38.dp.toPx())</text>
          <text x="96" y="454" fill="#d2a8ff">drawInfinityOPunchHole</text><text x="270" y="454" fill="#c9d1d9">(cameraDiameter = 3.5.dp.toPx())</text>
          <text x="64" y="482" fill="#c9d1d9">}</text>
          <text x="32" y="510" fill="#c9d1d9">}</text>
        </g>
      </svg>
    `),
  },
  {
    id: 's27-app-ui',
    name: 'SnapFrame Android System UI',
    category: 'Mobile',
    aspectRatio: '9/19.5',
    url: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="450" height="975" viewBox="0 0 450 975" fill="#090a0f">
        <rect width="450" height="975" fill="#090a0f" />
        
        <!-- App Bar -->
        <g transform="translate(24, 52)">
          <text x="0" y="24" fill="#f4f4f5" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="700">SnapFrame</text>
          <text x="0" y="44" fill="#71717a" font-family="'JetBrains Mono', monospace" font-size="11">v1.4.2 • ARM64-V8A</text>
          
          <rect x="360" y="6" width="36" height="36" rx="8" fill="#18181b" stroke="#27272a" />
          <path d="M374 24h8M378 20v8" stroke="#e4e4e7" stroke-width="1.5" stroke-linecap="round" />
        </g>
        
        <!-- Detected Clip Card -->
        <g transform="translate(24, 125)">
          <rect width="402" height="200" rx="14" fill="#121316" stroke="#27272a" stroke-width="1" />
          
          <rect x="20" y="20" width="362" height="100" rx="10" fill="#18181b" stroke="#27272a" />
          <rect x="36" y="32" width="330" height="76" rx="6" fill="#090a0f" />
          <circle cx="50" cy="44" r="3.5" fill="#71717a" />
          <circle cx="60" cy="44" r="3.5" fill="#71717a" />
          <circle cx="70" cy="44" r="3.5" fill="#71717a" />
          <rect x="85" y="41" width="120" height="6" rx="2" fill="#27272a" />
          
          <text x="20" y="152" fill="#f4f4f5" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="600">Active Clipboard Screenshot</text>
          <text x="20" y="172" fill="#71717a" font-family="'JetBrains Mono', monospace" font-size="11">1440 × 3120 px • PNG</text>
          
          <rect x="300" y="140" width="82" height="32" rx="6" fill="#27272a" stroke="#3f3f46" />
          <text x="325" y="161" fill="#f4f4f5" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600">Frame</text>
        </g>
        
        <!-- Hardware Frame Selectors -->
        <g transform="translate(24, 355)">
          <text x="0" y="0" fill="#a1a1aa" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" text-transform="uppercase" letter-spacing="0.5">Frame Decorator</text>
          
          <g transform="translate(0, 14)">
            <rect width="124" height="88" rx="10" fill="#18181b" stroke="#e4e4e7" stroke-width="1.5" />
            <circle cx="20" cy="20" r="3" fill="#ff5f56" />
            <circle cx="28" cy="20" r="3" fill="#ffbd2e" />
            <circle cx="36" cy="20" r="3" fill="#27c93f" />
            <text x="16" y="62" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600">macOS Dark</text>
            <text x="16" y="76" fill="#71717a" font-family="'JetBrains Mono', monospace" font-size="10">Traffic Lights</text>
          </g>
          
          <g transform="translate(138, 14)">
            <rect width="124" height="88" rx="10" fill="#121316" stroke="#27272a" stroke-width="1" />
            <rect x="48" y="14" width="28" height="36" rx="4" fill="#27272a" />
            <circle cx="62" cy="18" r="1.5" fill="#71717a" />
            <text x="16" y="62" fill="#a1a1aa" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600">S27 Ultra</text>
            <text x="16" y="76" fill="#71717a" font-family="'JetBrains Mono', monospace" font-size="10">Titanium</text>
          </g>
          
          <g transform="translate(276, 14)">
            <rect width="124" height="88" rx="10" fill="#121316" stroke="#27272a" stroke-width="1" />
            <rect x="24" y="16" width="76" height="32" rx="4" fill="#27272a" />
            <text x="16" y="62" fill="#a1a1aa" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600">Browser</text>
            <text x="16" y="76" fill="#71717a" font-family="'JetBrains Mono', monospace" font-size="10">URL Bar</text>
          </g>
        </g>
        
        <!-- Output Config -->
        <g transform="translate(24, 490)">
          <text x="0" y="0" fill="#a1a1aa" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" text-transform="uppercase" letter-spacing="0.5">Export Resolution</text>
          <rect y="14" width="402" height="48" rx="8" fill="#121316" stroke="#27272a" />
          <text x="18" y="44" fill="#f4f4f5" font-family="'JetBrains Mono', monospace" font-size="12">4K UHD (3840 × 2160) • Zero Compression</text>
        </g>
      </svg>
    `),
  },
  {
    id: 'terminal-cli',
    name: 'Terminal Logs & Clean Shell',
    category: 'Developer',
    aspectRatio: '16/9',
    url: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" fill="#090a0f">
        <rect width="800" height="450" fill="#090a0f" />
        <rect x="0" y="0" width="800" height="34" fill="#121316" />
        <circle cx="18" cy="17" r="4.5" fill="#ff5f56" />
        <circle cx="32" cy="17" r="4.5" fill="#ffbd2e" />
        <circle cx="46" cy="17" r="4.5" fill="#27c93f" />
        <text x="70" y="22" fill="#71717a" font-family="'JetBrains Mono', monospace" font-size="11">zsh — snapframe-cli — 80x24</text>
        
        <g font-family="'JetBrains Mono', monospace" font-size="12" line-height="20">
          <text x="24" y="70" fill="#22c55e">➜</text> <text x="44" y="70" fill="#60a5fa">snapframe</text> <text x="130" y="70" fill="#e5e7eb">build --target=android --arch=arm64-v8a --release</text>
          <text x="24" y="100" fill="#71717a">[1/4] Compiling Kotlin 2.0.20 Compose multiplatform shaders...</text>
          <text x="24" y="125" fill="#71717a">[2/4] Linking RenderEffect hardware blur pipeline (API 35)...</text>
          <text x="24" y="150" fill="#71717a">[3/4] Packaging APK with v2/v3 signatures...</text>
          <text x="24" y="180" fill="#22c55e">✓ Build complete: SnapFrame-v1.4.2-arm64-v8a.apk (6.4 MB)</text>
          <text x="24" y="210" fill="#71717a">SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</text>
        </g>
      </svg>
    `),
  },
  {
    id: 'story-16-9',
    name: '16:9 Landscape Product Story / Keynote',
    category: 'Stories',
    aspectRatio: '16/9',
    url: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540" fill="#090a0f">
        <rect width="960" height="540" fill="#0c0e14" />
        <rect x="0" y="0" width="960" height="540" fill="url(#grid)" />
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#171b26" stroke-width="1"/>
          </pattern>
        </defs>
        <g transform="translate(60, 80)">
          <rect width="130" height="26" rx="6" fill="#1e2433" stroke="#2b3247" />
          <text x="12" y="17" fill="#79c0ff" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">STORY PRESET • 16:9</text>
          
          <text x="0" y="80" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" letter-spacing="-0.03em">Next-Gen Android Visual Studio</text>
          <text x="0" y="120" fill="#8b949e" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" max-width="600">Hardware-accelerated frames with automatic aspect ratio scaling.</text>
          
          <g transform="translate(0, 170)">
            <rect width="240" height="150" rx="10" fill="#161b22" stroke="#30363d" />
            <text x="20" y="35" fill="#f0f6fc" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="700">Dynamic Bezel</text>
            <text x="20" y="60" fill="#7ee787" font-family="'JetBrains Mono', monospace" font-size="24" font-weight="700">1.1 mm</text>
            <text x="20" y="90" fill="#8b949e" font-family="'JetBrains Mono', monospace" font-size="12">Uniform edge margin</text>
            <rect x="20" y="115" width="200" height="6" rx="3" fill="#21262d" />
            <rect x="20" y="115" width="170" height="6" rx="3" fill="#238636" />
          </g>

          <g transform="translate(260, 170)">
            <rect width="240" height="150" rx="10" fill="#161b22" stroke="#30363d" />
            <text x="20" y="35" fill="#f0f6fc" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="700">Render Pipeline</text>
            <text x="20" y="60" fill="#58a6ff" font-family="'JetBrains Mono', monospace" font-size="24" font-weight="700">60 FPS</text>
            <text x="20" y="90" fill="#8b949e" font-family="'JetBrains Mono', monospace" font-size="12">AGSL Shader Hardware</text>
            <rect x="20" y="115" width="200" height="6" rx="3" fill="#21262d" />
            <rect x="20" y="115" width="190" height="6" rx="3" fill="#1f6feb" />
          </g>

          <g transform="translate(520, 170)">
            <rect width="240" height="150" rx="10" fill="#161b22" stroke="#30363d" />
            <text x="20" y="35" fill="#f0f6fc" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="700">Story Aspect</text>
            <text x="20" y="60" fill="#d2a8ff" font-family="'JetBrains Mono', monospace" font-size="24" font-weight="700">16:9 / 9:16</text>
            <text x="20" y="90" fill="#8b949e" font-family="'JetBrains Mono', monospace" font-size="12">Auto Dimensions Fit</text>
            <rect x="20" y="115" width="200" height="6" rx="3" fill="#21262d" />
            <rect x="20" y="115" width="180" height="6" rx="3" fill="#8957e5" />
          </g>
        </g>
      </svg>
    `),
  },
  {
    id: 'story-9-16',
    name: '9:16 Vertical Mobile Story / Reel',
    category: 'Stories',
    aspectRatio: '9/16',
    url: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="540" height="960" viewBox="0 0 540 960" fill="#090a0f">
        <rect width="540" height="960" fill="#090a0f" />
        <circle cx="270" cy="300" r="180" fill="#1e1b4b" opacity="0.4" filter="blur(40px)" />
        
        <!-- Story Top Bar -->
        <g transform="translate(24, 40)">
          <rect width="492" height="4" rx="2" fill="#27272a" />
          <rect width="180" height="4" rx="2" fill="#ffffff" />
          
          <g transform="translate(0, 20)">
            <circle cx="16" cy="16" r="16" fill="#18181b" stroke="#3f3f46" />
            <text x="42" y="15" fill="#f4f4f5" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700">snapframe.app</text>
            <text x="42" y="28" fill="#a1a1aa" font-family="'JetBrains Mono', monospace" font-size="10">Story 9:16 • 2h ago</text>
          </g>
        </g>
        
        <!-- Content Card -->
        <g transform="translate(24, 160)">
          <rect width="492" height="480" rx="20" fill="#121316" stroke="#27272a" />
          <text x="30" y="50" fill="#f4f4f5" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="800">Automatic Frame Geometry</text>
          <text x="30" y="80" fill="#71717a" font-family="'Plus Jakarta Sans', sans-serif" font-size="14">Adapts dynamically to every screenshot dimension.</text>
          
          <rect x="30" y="110" width="432" height="240" rx="12" fill="#090a0f" stroke="#1f232d" />
          <circle cx="50" cy="130" r="4" fill="#ff5f56" />
          <circle cx="62" cy="130" r="4" fill="#ffbd2e" />
          <circle cx="74" cy="130" r="4" fill="#27c93f" />
          <text x="90" y="134" fill="#71717a" font-family="'JetBrains Mono', monospace" font-size="10">AutoAdjustedFrame.tsx</text>
          
          <text x="50" y="180" fill="#7ee787" font-family="'JetBrains Mono', monospace" font-size="13">// Zero distortion</text>
          <text x="50" y="210" fill="#79c0ff" font-family="'JetBrains Mono', monospace" font-size="13">const aspect = naturalWidth / naturalHeight;</text>
          <text x="50" y="240" fill="#d2a8ff" font-family="'JetBrains Mono', monospace" font-size="13">canvas.fitScreenshotDimensions(aspect);</text>
          
          <rect x="30" y="380" width="432" height="60" rx="10" fill="#18181b" stroke="#27272a" />
          <text x="50" y="415" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="600">Swipe up to export high-res PNG</text>
        </g>
      </svg>
    `),
  },
];

export const KOTLIN_CODE_SNIPPETS: KotlinCodeSnippet[] = [
  {
    id: 'mac-window-decorator',
    title: 'MacWindowDecorator.kt',
    filename: 'app/src/main/java/com/snapframe/ui/decor/MacWindowDecorator.kt',
    description: 'Clean Architecture composable rendering pixel-accurate macOS traffic light chrome with frosted acrylic GPU shader.',
    language: 'kotlin',
    code: `package com.snapframe.ui.decor

import android.graphics.RenderEffect
import android.graphics.Shader
import android.os.Build
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.asComposeRenderEffect
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

enum class TitleBarStyle { DARK, LIGHT, GRAPHITE, ACRYLIC }

@Composable
fun MacWindowDecorator(
    modifier: Modifier = Modifier,
    title: String = "screenshot.png",
    style: TitleBarStyle = TitleBarStyle.DARK,
    cornerRadius: Dp = 16.dp,
    showControls: Boolean = true,
    content: @Composable BoxScope.() -> Unit
) {
    val barColor = when (style) {
        TitleBarStyle.LIGHT -> Color(0xFFF1F5F9)
        TitleBarStyle.GRAPHITE -> Color(0xFF1E293B)
        TitleBarStyle.ACRYLIC -> Color(0xCC090A0F)
        TitleBarStyle.DARK -> Color(0xFF121316)
    }

    Surface(
        modifier = modifier
            .clip(RoundedCornerShape(cornerRadius))
            .then(
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S && style == TitleBarStyle.ACRYLIC) {
                    Modifier.graphicsLayer {
                        renderEffect = RenderEffect.createBlurEffect(
                            20f, 20f, Shader.TileMode.CLAMP
                        ).asComposeRenderEffect()
                    }
                } else Modifier
            ),
        shape = RoundedCornerShape(cornerRadius),
        color = barColor,
        tonalElevation = 4.dp,
        shadowElevation = 16.dp
    ) {
        Column {
            // macOS Titlebar Strip
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(38.dp)
                    .padding(horizontal = 14.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                if (showControls) {
                    Row(
                        horizontalArrangement = Arrangement.spacedBy(8.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Box(Modifier.size(11.dp).clip(CircleShape).background(Color(0xFFFF5F56)))
                        Box(Modifier.size(11.dp).clip(CircleShape).background(Color(0xFFFFBD2E)))
                        Box(Modifier.size(11.dp).clip(CircleShape).background(Color(0xFF27C93F)))
                    }
                }
                Spacer(Modifier.weight(1f))
                Text(
                    text = title,
                    style = MaterialTheme.typography.labelMedium.copy(
                        fontSize = 12.sp,
                        color = Color(0xFFA1A1AA)
                    )
                )
                Spacer(Modifier.weight(1f))
            }
            // Screen Content Viewport
            Box(
                modifier = Modifier.fillMaxWidth(),
                content = content
            )
        }
    }
}`,
  },
  {
    id: 's27-device-mockup',
    title: 'DeviceMockupS27.kt',
    filename: 'app/src/main/java/com/snapframe/ui/mockup/DeviceMockupS27.kt',
    description: 'Hardware specification mockup for Samsung Galaxy S27 Ultra with 1.1mm uniform titanium bezel and Infinity-O camera.',
    language: 'kotlin',
    code: `package com.snapframe.ui.mockup

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.geometry.CornerRadius
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

enum class TitaniumFinish(val primary: Color, val accent: Color) {
    BLACK(Color(0xFF18181B), Color(0xFF3F3F46)),
    VIOLET(Color(0xFF2E1065), Color(0xFF7C3AED)),
    SILVER(Color(0xFF64748B), Color(0xFFE2E8F0)),
    GOLD(Color(0xFF78350F), Color(0xFFFDE047))
}

@Composable
fun DeviceMockupS27(
    modifier: Modifier = Modifier,
    finish: TitaniumFinish = TitaniumFinish.BLACK,
    content: @Composable BoxScope.() -> Unit
) {
    val bezelRadius = 40.dp
    val screenRadius = 36.dp

    Box(
        modifier = modifier
            .clip(RoundedCornerShape(bezelRadius))
            .background(
                brush = Brush.linearGradient(
                    colors = listOf(finish.accent, finish.primary, finish.accent),
                    start = Offset(0f, 0f),
                    end = Offset(1000f, 1000f)
                )
            )
            .padding(6.dp) // 1.1mm scale bezel
    ) {
        Box(
            modifier = Modifier
                .clip(RoundedCornerShape(screenRadius))
                .background(Color.Black)
                .fillMaxSize()
        ) {
            // Screen Viewport
            content()

            // Infinity-O Camera Cutout (3.5mm aperture)
            Box(
                modifier = Modifier
                    .align(Alignment.TopCenter)
                    .padding(top = 10.dp)
                    .size(10.dp)
                    .clip(RoundedCornerShape(5.dp))
                    .background(Color(0xFF0A0A0A))
                    .border(0.5.dp, Color(0xFF27272A), RoundedCornerShape(5.dp))
            )
        }
    }
}`,
  },
  {
    id: 'export-engine',
    title: 'FrameExportManager.kt',
    filename: 'app/src/main/java/com/snapframe/export/FrameExportManager.kt',
    description: 'Lossless Bitmap exporter generating 4K UHD PNG files with zero compression artifacts and Direct Intent sharing.',
    language: 'kotlin',
    code: `package com.snapframe.export

import android.content.Context
import android.graphics.Bitmap
import android.graphics.Canvas
import android.net.Uri
import androidx.core.content.FileProvider
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import java.io.File
import java.io.FileOutputStream

class FrameExportManager(private val context: Context) {

    suspend fun renderLosslessPng(
        sourceBitmap: Bitmap,
        targetWidth: Int = 3840,
        targetHeight: Int = 2160,
        scaleFactor: Float = 2.0f
    ): Result<Uri> = withContext(Dispatchers.IO) {
        runCatching {
            val outputBitmap = Bitmap.createBitmap(
                targetWidth,
                targetHeight,
                Bitmap.Config.ARGB_8888
            )
            val canvas = Canvas(outputBitmap)
            // Render background canvas, shadows, and device decorators at target resolution
            // ... Canvas drawing pipeline ...

            val cacheDir = File(context.cacheDir, "exports").apply { mkdirs() }
            val outputFile = File(cacheDir, "snapframe_\${System.currentTimeMillis()}.png")
            
            FileOutputStream(outputFile).use { out ->
                outputBitmap.compress(Bitmap.CompressFormat.PNG, 100, out)
            }
            
            FileProvider.getUriForFile(
                context,
                "\${context.packageName}.fileprovider",
                outputFile
            )
        }
    }
}`,
  },
  {
    id: 'quick-share-receiver',
    title: 'QuickShareReceiverActivity.kt',
    filename: 'app/src/main/java/com/snapframe/receiver/QuickShareReceiverActivity.kt',
    description: 'System-level ACTION_SEND intent receiver for zero-friction screenshot interception directly from the Android share sheet.',
    language: 'kotlin',
    code: `package com.snapframe.receiver

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.os.Parcelable
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import com.snapframe.ui.FramerScreen

class QuickShareReceiverActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        val incomingUri: Uri? = when (intent?.action) {
            Intent.ACTION_SEND -> {
                if (intent.type?.startsWith("image/") == true) {
                    (intent.getParcelableExtra<Parcelable>(Intent.EXTRA_STREAM) as? Uri)
                } else null
            }
            else -> null
        }

        setContent {
            FramerScreen(
                initialImageUri = incomingUri,
                onDismiss = { finish() }
            )
        }
    }
}`,
  },
];

export const APP_RELEASES: AppRelease[] = [
  {
    version: 'v1.4.2',
    tag: 'v1.4.2',
    date: '2026-08-20',
    size: '6.4 MB',
    isLatest: true,
    minSdk: 'Android 10 (API 29)',
    targetSdk: 'Android 15 (API 35)',
    sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    downloadUrl: '#download-apk',
    highlights: [
      'Samsung Galaxy S27 Ultra 1.1mm uniform titanium bezel specification',
      'Hardware RenderEffect GPU blur shader pipeline for Android 12+',
      'Quick Share Receiver Activity for direct screenshot interception',
      'Lossless 4K UHD PNG export engine (Zero-compression ARGB_8888)',
      'Multi-aspect canvas staging: Auto, 16:9, 4:3, 1:1, 9:16'
    ]
  }
];
