import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MOCK_GRAPH_NODES, MOCK_GRAPH_EDGES } from '../../data/mockData';
import type { GraphNode } from '../../types';
import {
  Network,
  Info,
  DollarSign,
  Clock,
  Sparkles
} from 'lucide-react';

export const OpportunityGraphView: React.FC = () => {
  const { navigateTo } = useApp();
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(MOCK_GRAPH_NODES[0]);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Stream', 'Exam', 'Degree', 'Skill', 'Career'];

  const filteredNodes = filterCategory === 'All'
    ? MOCK_GRAPH_NODES
    : MOCK_GRAPH_NODES.filter(n => n.category === filterCategory);

  const getCategoryBadgeColor = (cat: string) => {
    switch (cat) {
      case 'Stream': return 'bg-slate-100 text-slate-900 border-slate-300';
      case 'Exam': return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'Degree': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Skill': return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Career': return 'bg-[#EEF2FF] text-[#0F172A] border-[#4F46E5]';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* View Header */}
      <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-1">
            STAGE 2 • FEATURE 8
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">
            Interactive Student Opportunity Graph Visualizer
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            Click any node in the network to inspect prerequisites, estimated costs, and future salary bands.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 bg-[#F8FAFC] p-1.5 rounded-2xl border border-[#E2E8F0]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition ${
                filterCategory === cat
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: SVG Node-Edge Interactive Network */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm relative overflow-hidden flex flex-col min-h-[520px]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0F172A]">
              <Network className="w-4 h-4 text-[#4F46E5]" />
              <span>SVG Node-Edge Pathway Map</span>
            </div>
            <div className="text-[10px] text-[#64748B] bg-[#F8FAFC] px-2 py-1 rounded-lg border border-[#E2E8F0]">
              Click nodes to view full career requirements
            </div>
          </div>

          <div className="flex-1 relative w-full h-[450px] bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] overflow-auto custom-scrollbar p-4">
            <svg
              className="w-[1150px] h-[580px]"
              viewBox="0 0 1150 580"
            >
              <defs>
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#4F46E5" />
                </marker>
              </defs>

              {/* Render Edges */}
              {MOCK_GRAPH_EDGES.map((edge, idx) => {
                const fromNode = MOCK_GRAPH_NODES.find(n => n.id === edge.from);
                const toNode = MOCK_GRAPH_NODES.find(n => n.id === edge.to);
                if (!fromNode || !toNode) return null;

                const isConnectedToSelected = selectedNode && (selectedNode.id === edge.from || selectedNode.id === edge.to);

                return (
                  <g key={idx}>
                    <line
                      x1={fromNode.x + 80}
                      y1={fromNode.y + 20}
                      x2={toNode.x}
                      y2={toNode.y + 20}
                      stroke={isConnectedToSelected ? '#4F46E5' : '#CBD5E1'}
                      strokeWidth={isConnectedToSelected ? '3' : '1.5'}
                      strokeDasharray={edge.label ? '4,4' : 'none'}
                      markerEnd="url(#arrow)"
                    />
                    {edge.label && (
                      <text
                        x={(fromNode.x + toNode.x) / 2 + 40}
                        y={(fromNode.y + toNode.y) / 2 + 15}
                        fill="#64748B"
                        fontSize="9"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        {edge.label}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Render Nodes */}
              {filteredNodes.map((node) => {
                const isSelected = selectedNode?.id === node.id;
                return (
                  <g
                    key={node.id}
                    transform={`translate(${node.x}, ${node.y})`}
                    onClick={() => setSelectedNode(node)}
                    className="cursor-pointer group"
                  >
                    <rect
                      width="150"
                      height="45"
                      rx="12"
                      fill={isSelected ? '#0F172A' : '#ffffff'}
                      stroke={isSelected ? '#4F46E5' : '#CBD5E1'}
                      strokeWidth={isSelected ? '2.5' : '1.5'}
                      className="transition-all duration-150 drop-shadow-xs group-hover:stroke-[#4F46E5]"
                    />
                    <text
                      x="75"
                      y="20"
                      fill={isSelected ? '#ffffff' : '#0F172A'}
                      fontSize="10"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {node.title.length > 20 ? node.title.substring(0, 18) + '...' : node.title}
                    </text>
                    <text
                      x="75"
                      y="34"
                      fill={isSelected ? '#A5B4FC' : '#4F46E5'}
                      fontSize="8"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {node.category.toUpperCase()}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Right Column: Node Details Inspector */}
        <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-6">
          {selectedNode ? (
            <div className="space-y-5">
              <div className="space-y-2">
                <span className={`inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-full border ${getCategoryBadgeColor(selectedNode.category)}`}>
                  {selectedNode.category} NODE
                </span>
                <h3 className="text-xl font-extrabold text-[#0F172A]">
                  {selectedNode.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {selectedNode.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {selectedNode.duration && (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs">
                    <span className="font-semibold text-[#64748B] flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#4F46E5]" /> Duration:
                    </span>
                    <span className="font-bold text-[#0F172A]">{selectedNode.duration}</span>
                  </div>
                )}

                {selectedNode.avgSalary && (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs">
                    <span className="font-semibold text-[#64748B] flex items-center gap-1.5">
                      <DollarSign className="w-4 h-4 text-[#10B981]" /> Salary Band:
                    </span>
                    <span className="font-extrabold text-[#10B981]">{selectedNode.avgSalary}</span>
                  </div>
                )}

                {selectedNode.costEst && (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs">
                    <span className="font-semibold text-[#64748B] flex items-center gap-1.5">
                      <Info className="w-4 h-4 text-[#0F172A]" /> Est. Education Cost:
                    </span>
                    <span className="font-bold text-[#0F172A]">{selectedNode.costEst}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 space-y-2">
                <button
                  onClick={() => navigateTo('skill-gap-studio', selectedNode.title)}
                  className="w-full py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#4F46E5] text-white text-xs font-bold shadow-md transition flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#818CF8]" />
                  Analyze Skill Gap For This Node
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-[#64748B]">
              Select any node on the canvas map to inspect details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
